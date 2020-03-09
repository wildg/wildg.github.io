// Used the following website to set up my code:
// https://socket.io/get-started/chat/

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

// Users will be a dictionary of previous users.
var users = {};

// NumOfUsers will be used to assign an arbitrary amount of users' names.
var numOfUsers = 0;

// History will be a list of previous messages sent in the chat up to length 200.
var history = [];

// ColorLetters will store the possible letters which can be used to describe a color.
var colorLetters = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F'];

// getTime will return the string containing the time the message was sent at.
function getTime() {
    var today = new Date();

    var currentHour = (today.getHours() < 12) ? today.getHours() : today.getHours() - 12;
    var currentMinute = (today.getMinutes() < 10) ? "0" + today.getMinutes() : today.getMinutes();
    var currentTimeOfDay = (today.getHours() < 12) ? "AM" : "PM";

    return " @ " + currentHour + ":" + currentMinute + " " + currentTimeOfDay;
}

// Display the code written on index.html.
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// On connection of a socket, do the following.
io.on('connection', function(socket){
    console.log('a user connected');

    // Showing all chat history to the newly logged in user.
    for (item in history) {
        // Getting the actual message text, time sent, and name/color of sender.
        var msg = history[item].msg;
        var time = history[item].time;
        var name = history[item].name;
        var nameColor = history[item].nameColor;

        // Emitting the chat messages sent to the newly connected user.
        socket.emit("chat message", {msg, time, name, nameColor});
    }

    // Showing the new user all the different users currently connected
    for (n in users) {
        socket.emit("new user", {name : users[n][0], color : users[n][1]});
    }

    // Adding the new user to the users dictionary with the unique socket.id of this new user.
    users[socket.id] = ["user" + numOfUsers, "000000"];
    numOfUsers++;

    // Adding the current user to its own list of users.
    socket.emit("new user me", {name : users[socket.id][0], color : users[socket.id][1]});

    // Broadcasting to all other users that this new user connected
    socket.broadcast.emit("new user", {name : users[socket.id][0], color : users[socket.id][1]});

    // When there is a new chat message, do the following:
    socket.on('chat message', function(info){

        // Getting the actual message text, time sent, and name/color of sender.
        var msg = info.msg;
        var time = getTime();
        var name = users[info.id][0];
        var nameColor = users[info.id][1];

        // If the command was an attempt at changing the color
        if (msg.charAt(0) === "/") {

            var i;

            console.log("special command inputted...");

            // If the command was an attempt at changing the color, do the following:
            if (( msg.substring(1, 11) === "nickcolor ") && (msg.length === 17)) {

                // Set colorPossible to true.
                var colorPossible = true;
                var colorCode = msg.substring(11, msg.length);

                for ( i = 0; i < colorCode.length; i++ ) {

                    // If the value at i is not a number:
                    if (isNaN( colorCode.charAt(i) )) {

                        // If the character is not one of the possible color letters, make colorPossible equal false
                        // and break.
                        if (!colorLetters.includes(colorCode.charAt(i))) {
                            colorPossible = false;
                            break;
                        }
                    }
                }

                // If the color inputted does work, dop the following.
                if (colorPossible) {
                    //Removing the previous name from all users and updating our user list to have the new color.
                    io.emit('remove user', {name : users[socket.id][0]});
                    users[socket.id][1] = colorCode;

                    // Adding the current user to its own list of users.
                    socket.emit("new user me", {name : users[socket.id][0], color : users[socket.id][1]});

                    // Broadcasting to all other users the new username.
                    socket.broadcast.emit("new user", {name : users[socket.id][0], color : users[socket.id][1]});

                    return;
                }

                // In case the special command did not work, do the following:
                socket.emit("error pop up", {msg});
                return;
            }

            // If the new message was an attempt at changing the nickname, do the following:
            else if (( msg.substring(1, 6) === "nick ") && (msg.length > 6) && (msg.length < 17)) {

                // Set usernamePossible to false.
                var usernamePossible = false;

                // First, we check if the username is just a series of empty characters, which if this is the case,
                // we set usernamePossible to false.
                for ( i = 6; i < msg.length; i++) {
                    if (msg.charAt(i) !== " ") {
                        usernamePossible = true;
                        break;
                    }
                }

                // If the username was a series of empty characters just return.
                if (usernamePossible === false) {
                    socket.emit("error pop up", {msg});
                    return;
                }

                // Set the usernameTaken to false and get what the new username would be.
                var usernameTaken = false;
                var possibleUsername = msg.substring(6, msg.length);

                // If the username is already taken, set usernameTaken to true.
                for (n in users) {
                    if (users[n][0] === possibleUsername) {
                        usernameTaken = true;
                        break;
                    }
                }

                // If the username is already taken just return.
                if (usernameTaken === true) {
                    socket.emit("error pop up", {msg});
                    return;
                }

                //Removing the previous name from all users and updating our user list.
                io.emit('remove user', {name : users[socket.id][0]});
                users[socket.id][0] = possibleUsername;

                // Adding the current user to its own list of users.
                socket.emit("new user me", {name : users[socket.id][0], color : users[socket.id][1]});

                // Broadcasting to all other users the new username.
                socket.broadcast.emit("new user", {name : users[socket.id][0], color : users[socket.id][1]});

                return;
            }

            // In case the special command did not work, do the following:
            socket.emit("error pop up", {msg});
            return;
        }

        // Otherwise, print the message sent as is done normally.
        else {

            // Add the new message to the history of messages.
            history.push( {msg, time, name, nameColor} );

            // If the amount of messages stored in history is greater than 200, remove the oldest message.
            if (history.length > 200) {
                console.log("oversized history");
                history.shift();
            }

            // To all sockets apart from the one that tried to create a new message,
            socket.broadcast.emit('chat message', {msg, time, name, nameColor});
            socket.emit('my message', {msg, time, name, nameColor});
        }
    });

    // Do the following if a user disconnects:
    socket.on('disconnect', function(){
        console.log('user disconnected');

        // Remove the user's name from all other users' list and remove it from the current list of users we have.
        io.emit('remove user', {name : users[socket.id][0]});
        delete users[socket.id];
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});