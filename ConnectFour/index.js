// Used the following website to set up my code:
// https://socket.io/get-started/chat/

var express = require('express');
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

// everyUser will be a dictionary of the users unique socket id followed by their information.
var everyUser = {};

// seekingRandom will contain a list of users that are seeking a random game.
var seekingRandom = [];

// Use the items in the directory
app.use( express.static( __dirname + '/public'));

// Display the code written on index.html
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){

    // randomUsername() will generate a random username.
    function randomUsername() {
        let parts = [];
        parts.push( ["Small", "Big", "Medium", "Miniscule"] );
        parts.push( ["Red", "Blue", "Bad", "Good", "Round"] );
        parts.push( ["Bear", "Dog", "Potato", "Orangutan", "Klingon"] );

        username = "";
        for(part of parts) {
            username += part[Math.floor(Math.random()*part.length)];
        }
        return username;
    }

    // duplicateName() will check whether the name given to it is a duplicate or not. It returns some index:
    //  - (>= 0) When the name is a duplicate.
    //  - (-1) When the name is NOT a duplicate.
    function duplicateName(name) {

        // For every user in our user list.
        for (var key in everyUser) {

            // If the inputted name is equal to the name of another user, return that user's id.
            if (everyUser[key].username === name) {
                return key
            }
        }

        // Otherwise return -1.
        return -1;
    }

    // randomGameCode() will generate a random game code of 5 units.
    function randomGameCode() {
        return Math.floor(10000 + Math.random() * 90000);
    }

    // duplicateCode() will check whether the code given to it is a duplicate or not. It returns the index:
    //  - (>= 0) When the code is a duplicate.
    //  - (-1) When the code is NOT a duplicate.
    function duplicateCode(code) {

        // For every user in our user list.
        for (var key in everyUser) {

            // If the inputted code is equal to the code of another user, return that user's id.
            if (everyUser[key].gameCode === code) {
                return key;
            }
        }

        // Otherwise, return -1.
        return -1;
    }

    // generalInfo will store all our user information, including:
    //  - username: The username of the current player.
    //  - gameCode: The random game code to join the player's lobby.
    //  - inGame: The game lobby the user is in.
    //  - opponent: The username of the opponent.
    //  - opponentID: The socket id of the opponent.
    //  - online: Whether or not the user is currently online.
    var generalInfo = {
        username: randomUsername(),     // Generating a random username.
        gameCode: randomGameCode(),     // Generating a random game code.
        inGame: null,
        opponent: null,
        opponentID: null,
        online: true
    };

    // While the username generated is already assigned to someone else, generate new user names.
    while (duplicateName(generalInfo.username) >= 0) {
        generalInfo.username = randomUsername();
    }

    // While there are users with the same game code, generate new game codes.
    while ( duplicateCode(generalInfo.gameCode) >= 0 ) {
        generalInfo.gameCode = randomGameCode();
    }

    // Storing the new user to the dictionary with their socket id as key.
    everyUser[socket.id] = generalInfo;

    // Send the user settings to the client to be displayed.
    socket.emit('userSettings', generalInfo);

    // If the user had a cookie with data already:
    socket.on('alreadyUser', function(data) {

        // Resetting user data:
        everyUser[socket.id].username = data.username;
        everyUser[socket.id].gameCode = data.gameCode;

        // For every previously connected socket k:
        for (var k in everyUser) {

            // If k does not equal the current user's socket id:
            if (k !== socket.id) {

                // If the usernames are equal to each other:
                if (everyUser[k].username === data.username){

                    // If this duplicate user is online:
                    if (everyUser[k].online) {

                        // Disconnect them
                        socket.to(k).emit('disconnectMe');
                    }

                    // Remove the user:
                    delete everyUser[k];
                }
            }
        }
    });

    // If the user requests to change their name:
    socket.on('changeName', function(data) {

        // key is the key of some possible user with the same name as was inputted.
        var key = duplicateName(data);

        // If a user was found with that same name:
        if (key !== -1) {
            socket.emit('failEvent', "Unable to Change Name: The name is already taken.");
        }

        // Otherwise, we can change the name:
        else {
            // Change the name on our data in the server.
            everyUser[socket.id].username = data;

            // Change the name on the client side.
            socket.emit('newUsername', everyUser[socket.id].username);
        }
    });

    // removeFromRandom() is a function that removes some socket.id inputted from our list of users seeking a random
    //  match.
    function removeFromRandom(ident) {

        // If the user was seeking a random game:
        if (seekingRandom.includes(ident)) {

            // For every index in the list:
            for (var i = 0; i < seekingRandom.length; i++) {

                // If the user was found at index i:
                if (seekingRandom[i] === ident) {

                    // Remove that user from our seekingRandom list.
                    seekingRandom.splice(i, 1);
                }
            }
        }
    }

    // If the user requests to join some game:
    socket.on('joinGame', function(data) {

        // key is the key of some possible user with the same code as was inputted.
        var key = duplicateCode(data);

        // If key is -1, return "Nobody with that code."
        if (key === -1) {
            socket.emit('failEvent', "Unable to Join: Nobody has that code.");
        }

        // If the user is not online, return "User is not online."
        else if (!everyUser[key].online) {
            socket.emit('failEvent', "Unable to Join: User is not online.");
        }

        // If the user is in a game, return "User is in game."
        else if (everyUser[key].inGame !== null) {
            socket.emit('failEvent', "Unable to Join: User is in game.");
        }

        // Otherwise, we can create a new game with both of these users.
        else {
            // roomCode is the code used by the
            var roomCode = everyUser[socket.id].username + '_vs_' + everyUser[key].username;

            // Setting the game code to each of the user's information.
            everyUser[socket.id].inGame = roomCode;
            everyUser[key].inGame = roomCode;

            // Setting the username of the opponent each is facing.
            everyUser[socket.id].opponent = everyUser[key].username;
            everyUser[key].opponent = everyUser[socket.id].username;

            // Setting the socket id of the opponent each is facing.
            everyUser[socket.id].opponentID = key;
            everyUser[key].opponentID = socket.id;

            // Setting the turns of each player.
            everyUser[socket.id].turn = true;
            everyUser[key].turn = false;

            // Removing both users from our list of random users looking for a match if they were added.
            removeFromRandom(socket.id);
            removeFromRandom(key);

            // Sending the startGame event to both users.
            socket.emit('startGame', everyUser[socket.id]);
            socket.to(key).emit('startGame', everyUser[key]);
        }
    });

    // Receive a request from some user to join a random game.
    socket.on('randomGame', function() {

        // If the user already requested a random match:
        if (seekingRandom.includes(socket.id)) {
            return;
        }

        // Add the user's socket id to the seekingRandom list.
        seekingRandom.push(socket.id);

        // If there are 2 or more users looking to join a random game:
        if (seekingRandom.length >= 2) {

            // roomCode is the code used by the server to set up game rooms.
            var roomCode = everyUser[socket.id].username + '_vs_' + everyUser[ seekingRandom[0] ].username;

            // Adding the game code to each of the user's information.
            everyUser[socket.id].inGame = roomCode;
            everyUser[seekingRandom[0]].inGame = roomCode;

            // Setting the opponent each is facing.
            everyUser[socket.id].opponent = everyUser[seekingRandom[0]].username;
            everyUser[seekingRandom[0]].opponent = everyUser[socket.id].username;

            // Setting the socket id of the opponent each is facing.
            everyUser[socket.id].opponentID = seekingRandom[0];
            everyUser[seekingRandom[0]].opponentID = socket.id;

            // Setting the turns of each player.
            everyUser[socket.id].turn = true;
            everyUser[seekingRandom[0]].turn = false;

            // Sending the startGame event to both users.
            socket.emit('startGame', everyUser[socket.id] );
            socket.to(seekingRandom[0]).emit('startGame', everyUser[ seekingRandom[0] ]);

            // Removing these socket id's from our seeking random array.
            removeFromRandom(socket.id);
            removeFromRandom( seekingRandom[0] );
        }
    });

    socket.on('moveMade', function(data) {

        // Getting the socket id of the opponent our user was facing.
        var opID = everyUser[socket.id].opponentID;

        // Sending the user's move to their opponent.
        socket.to( opID ).emit('opponentMove', {col: data.columnUsed, row: data.rowUsed, w: data.wGame, wm: data.wMove});

    });

    socket.on('gameEnded', function() {
        // Resetting inGame to null.
        everyUser[socket.id].inGame = null;

        // Resetting opponent to null.
        everyUser[socket.id].opponent = null;

        // Resetting opponent ID to null.
        everyUser[socket.id].opponentID = null;
    });

    // Should the user disconnect:
    socket.on('disconnect', function(data) {

        if (data === "transport close") {

            // If the user was in game:
            if (everyUser[socket.id].inGame !== null) {

                // Send oppDisconnect event to the opponent:
                socket.to( everyUser[socket.id].opponentID ).emit("oppDisconnect");
            }

            // If a user disconnects we ensure the data for whether or not:
            everyUser[socket.id].online = false;    // The user is online is false.
            everyUser[socket.id].inGame = null;     // The user is in game is null.
            everyUser[socket.id].opponent = null;   // The user's opponent is null.
            everyUser[socket.id].opponentID = null; // The user's opponentID is false.

            removeFromRandom(socket.id);
        }
    });
});

http.listen(3001, function(){
    console.log('listening on *:3001');
});