var socket = io();

// displayText() takes in a text we want to display and the id of the item we want to display it on.
function displayText(text, identifier) {

    // Change the text of the id element.
    document.getElementById(identifier).innerHTML = text;
}

// Themes will store the themes used.
var themes = {
    "original": {
        highlight: 'orange',
        myPiece: 'red',
        oppPiece: 'yellow'
    },
    "ugly": {
        highlight: 'skyblue',
        myPiece: 'greenyellow',
        oppPiece: 'mediumpurple'
    },
    "courage": {
        highlight: 'deeppink',
        myPiece: 'plum',
        oppPiece: 'saddlebrown'
    }
};

// userInfo will store all our user information, including:
//  - username: The username of the current player.
//  - gameCode: The random game code to join the player's lobby.
//  - theme: The theme the user is using.
//  - opponent: The username of the opponent.
//  - move: The total amount of moves done in a game.
//  - turn: Whether or not it's the user's turn.
var userInfo = {
    username: null,
    gameCode: null,
    theme: "original",
    opponent: null,
    move: 0,
    turn: false
};

var gameBoardList = [];

// makeGameBoard() creates an initial game board to be used.
function makeGameBoard() {

    // Resetting the gameBoardList to just be an empty array.
    gameBoardList = [[null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null]];
}

// getCookie() takes in some cookie name and looks to see if its data is stored in a cookie.
function getCookie(cName) {

    // If there are cookies:
    if (document.cookie.length > 0) {

        // Get the index of the start and end of the cookie information.
        var dataSt = document.cookie.indexOf(cName + "=") + cName.length + 1;
        var dataFn = document.cookie.indexOf(";", dataSt);

        if (dataFn < 0) {
            return document.cookie.substring(dataSt, document.cookie.length);
        }

        // Return the cookies information.
        return document.cookie.substring(dataSt, dataFn);
    }

    // Return "" if no cookie is found.
    return "";
}

// Set cookie sets a new cookie.
function setCookie(cName, newData) {

    // Set the new cookie value.
    document.cookie = cName + "=" + newData;
}

// On receiving 'userSettings' from the server:
socket.on('userSettings', function(data){

    // Check if there is a username stored in a cookie.
    var possibleUsername = getCookie("username");

    // If the username is found in a cookie:
    if (possibleUsername !== "") {
        userInfo.username = possibleUsername;
        userInfo.gameCode = parseInt(getCookie("gameCode"));
        userInfo.theme = getCookie("theme");

        // Send the data from the cookie to the server.
        socket.emit('alreadyUser', userInfo);
    }

    // Otherwise:
    else {
        // Assign the data received from the server to local variables.
        userInfo.username = data.username;
        userInfo.gameCode = data.gameCode;

        setCookie("username", userInfo.username);
        setCookie("gameCode", userInfo.gameCode);
        setCookie("theme", userInfo.theme);
    }

    // Display the data received accordingly.
    displayText( userInfo.username + ".","myUname");
    displayText( userInfo.gameCode, "gameCode" );
});

// If the user is trying to change their username:
$('#nameForm').submit(function(e) {

    // Don't allow the page to reload.
    e.preventDefault();

    // Get the new name inputted by the user.
    var newName = $('#unameInput').val();

    // Empty the name input field after.
    $('#unameInput').val('');

    // If the new name contains a space or is simply nothing:
    if ((newName.includes(" ")) || (newName === '')) {
        alert("No spaces in the new name please.");
        return;
    }

    // Send the new name to the server to be checked.
    socket.emit('changeName', newName);
});

socket.on("newUsername", function(data) {

    // Setting the new username.
    userInfo.username = data;

    // Set the cookie for username again.
    setCookie("username", userInfo.username);

    // Display the new username.
    displayText( userInfo.username + ".","myUname");
});

// If the user inputted some incorrect data:
socket.on('failEvent', function(data){
    alert(data);
});

// If the user wants to join someone else's game:
$('#joinForm').submit(function(e) {
    // Don't allow the page to reload.
    e.preventDefault();

    // Get the new lobby inputted by the user.
    var lobbyNumber = $('#joinInput').val();

    // Empty the lobby input field after.
    $('#joinInput').val('');

    // If the length of the input is not equal to 5:
    if (lobbyNumber.length !== 5) {
        alert("The lobby number must have 5 digits.");
        return;
    }

    // For every character inputted:
    for (var i = 0; i < lobbyNumber.length; i++) {

        // If any of the inputted lobby code characters are not a number:
        if (isNaN(lobbyNumber.charAt(i))) {
            alert("The lobby must be made up of digits.");
            return;
        }
    }

    var intVersionOfLobby = parseInt(lobbyNumber);

    // If the game code is the same as the one the user has.
    if (intVersionOfLobby === userInfo.gameCode) {
        alert("This is your game code silly.");
        return;
    }

    // Since we know it is a possible game code, we send it to the user.
    socket.emit('joinGame', intVersionOfLobby);
});

// If the user wants to join a random game:
$('#randomGameForm').submit(function(e) {
    // Don't allow the page to reload.
    e.preventDefault();

    // Send a randomGame event to the server.
    socket.emit('randomGame');
});

// changeTheme will change the theme of the game.
function changeTheme( t ) {

    // If the new theme is different than the current one:
    if (t !== userInfo.theme) {

        // Resetting the theme to the new one:
        userInfo.theme = t;

        // Changing the theme saved in the cookie:
        setCookie("theme", t);

        // Will be used to change color of pieces on the board.
        var pieceDown;

        // For every row that was used:
        for (var r = 0; r < gameBoardList.length; r++) {

            // For every column that was used:
            for (var c = 0; c < 7; c++) {

                // If the piece is the opponents:
                if (gameBoardList[r][c] === userInfo.opponent) {

                    // Get the position on the html:
                    pieceDown = document.getElementById("r" + r + "c" + c);

                    // Change the color appropriately
                    pieceDown.style.backgroundColor = themes[ userInfo.theme ].oppPiece;
                }

                // If the piece is the current players:
                else if (gameBoardList[r][c] === userInfo.username) {

                    // Get the position on the html:
                    pieceDown = document.getElementById("r" + r + "c" + c);

                    // Change the color appropriately
                    pieceDown.style.backgroundColor = themes[ userInfo.theme ].myPiece;
                }
            }
        }
    }
}

// gameHeader() will change the header of the game according to actions undertaken by the users.
function gameHeader(w = null) {

    if (w === null) {
        // Display the opponent's name.
        displayText("You're playing against " + userInfo.opponent, "opponentName");

        // If it is the current user's turn, display that it is their turn.
        if (userInfo.turn === true) {
            displayText("It's YOUR turn.", "turnOf");
        }

        // Otherwise, say it is the opponents turn.
        else {
            displayText("It's your OPPONENT'S turn.", "turnOf");
        }

        return;
    }

    else if (w === true) {
        displayText(userInfo.username + ", you WON against " + userInfo.opponent, "opponentName");
    }

    else if (w === false) {
        displayText(userInfo.username + ", you LOST against " + userInfo.opponent, "opponentName");
    }

    else if (w === "neutral") {
        displayText(userInfo.username + ", you TIED with " + userInfo.opponent, "opponentName");
    }

    // Remove anything from the "turnOf" id.
    displayText("", "turnOf");

    // Display the endGameDiv now that the game is over.
    document.getElementById("endGameDiv").style.display = "flex";
}

// If the user receives a start game notification from the server:
socket.on('startGame', function(data) {

    // Setting opponent to the opponent given by the server.
    userInfo.opponent = data.opponent;
    userInfo.turn = data.turn;

    // Stop displaying the starting screen and display the game screen.
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'flex';

    // Create the game board locally.
    makeGameBoard();

    // Resetting the game header appropriately.
    gameHeader();
});

// If the server sends a disconnect event to the client:
socket.on('disconnectMe', function() {

    // Disconnect the socket.
    socket.disconnect();
});

// Should one's opponent disconnect, emit a gameOver event:
socket.on('oppDisconnect', function() {
    gameOver( true );
});

// If the opponent made a move:
socket.on('opponentMove', function(data){

    // Set the color of the piece placed by the opponent visually.
    document.getElementById("r" + data.row + "c" + data.col).style.backgroundColor = themes[userInfo.theme].oppPiece;

    // Set the opponent's name to where they put the piece.
    gameBoardList[data.row][data.col] = userInfo.opponent;

    // Add one to the move count.
    userInfo.move++;

    // If the opponent won the game:
    if (data.w === true) {
        for (var i = 0; i < data.wm.length; i++) {
            document.getElementById("r"+ data.wm[i][0] +"c"+ data.wm[i][1]).style.borderColor = themes[userInfo.theme].highlight;
        }

        gameHeader(false);
    }

    // If the gameBoardList is full:
    else if (userInfo.move === 42) {
        gameHeader("neutral");
    }

    // Otherwise:
    else {
        // Set the turn to be true
        userInfo.turn = true;

        // Set the game header appropriately.
        gameHeader();
    }

});

function columnClick(col) {

    // If it is the user's turn:
    if (userInfo.turn) {

        // If the column is not full:
        if (gameBoardList[0][col] === null) {

            // Loop through every row starting from the bottom row:
            for (var row = 5; row >= 0; row--) {

                // For the first row we find that is null:
                if (gameBoardList[row][col] === null) {

                    // We set it to the username.
                    gameBoardList[row][col] = userInfo.username;

                    // We set its color to be red.
                    document.getElementById("r" + row + "c" + col).style.backgroundColor = themes[userInfo.theme].myPiece;

                    // We increment move and set turn to false.
                    userInfo.move++;
                    userInfo.turn = false;

                    // If there have been at least 7 moves, check for a win condition.
                    if (userInfo.move >= 7) {

                        // Creating a connection array attained from our checkForWin function.
                        var connArr = checkForWin(col, row);

                        // If the user won the game:
                        if (connArr.length >= 4) {

                            // For every connection written in the array.
                            for (var i = 0; i < connArr.length; i++) {
                                document.getElementById("r"+ connArr[i][0] +"c"+ connArr[i][1]).style.borderColor = themes[userInfo.theme].highlight;
                            }

                            // Emit moveMade to the server with the column and row that was used, as well as whether or
                            //  not the user won the game.
                            socket.emit("moveMade", {columnUsed: col, rowUsed: row, wGame: true, wMove: connArr});

                            // Set the game header to win = true.
                            gameHeader(true);
                            return;
                        }
                    }

                    // Emit moveMade to the server with the column and row that was used, as well as whether or not
                    //  the user won the game.
                    socket.emit('moveMade', {columnUsed: col, rowUsed: row, wGame: false});

                    // If the gameBoardList is full:
                    if (userInfo.move === 42) {
                        gameHeader("neutral");
                        return;
                    }

                    // Resetting the game header appropriately.
                    gameHeader();
                    return;
                }
            }
        }

        // Otherwise, if the column was full:
        else {
            alert("That column is full!");
        }
    }
}

function checkForWin(c, r) {

    // connections will maintain a list of connections in the form [row, column].
    var connections = [[r, c]];

    // HORIZONTAL CHECK:
    // Starting from one to the right of the position the user placed a piece at and going to the LEFT:
    for (var i = c + 1; i <= 6; i++) {

        // If the position we are on does not equal the username, break.
        if (gameBoardList[r][i] !== userInfo.username) {
            break;
        }

        // Adding our found connection to our list of connections.
        connections.push([r, i]);
    }

    // Starting from one to the left of the position the user placed a piece at and going to the LEFT:
    for (var i = c - 1; i >= 0; i--) {

        // If the position we are on does not equal the username, break.
        if (gameBoardList[r][i] !== userInfo.username) {
            break;
        }

        // Adding our found connection to our list of connections.
        connections.push([r, i]);
    }

    // If the amount of connections is above 4 return true.
    if (connections.length >= 4) {
        return connections;
    }

    // Resetting connections.
    connections = [[r, c]];

    // VERTICAL CHECK:
    // Starting from one bellow the position the user placed a piece at and going BELLOW:
    for (var i = r + 1; i <= 5; i++) {

        // If the position we are on does not equal the username, break.
        if (gameBoardList[i][c] !== userInfo.username) {
            break;
        }

        // Adding our found connection to our list of connections.
        connections.push([i, c]);
    }

    // If the amount of connections is above 4 return true.
    if (connections.length >= 4) {
        return connections;
    }

    // Resetting connections.
    connections = [[r, c]];

    // DIAGONAL CHECK (SLOPING DOWN RIGHT):
    // creating a temporary column element to be used.
    var tempCol = c;

    // Starting from one bellow the position the user placed a piece at and going BELLOW and RIGHT:
    for (var i = r + 1; i <= 5; i++) {

        // If the position we are on does not equal the username, break.
        if (gameBoardList[i][tempCol + 1] !== userInfo.username) {
            break;
        }

        // Increment tempCol.
        tempCol++;

        // Adding our found connection to our list of connections.
        connections.push([i, tempCol]);
    }

    // Resetting tempCol:
    tempCol = c;

    // Starting from one above the position the user placed a piece at and going UP and LEFT:
    for (var i = r - 1; i >= 0; i--) {

        // If the position we are on does not equal the username, break.
        if (gameBoardList[i][tempCol - 1] !== userInfo.username) {
            break;
        }

        // Decrement tempCol.
        tempCol--;

        // Adding our found connection to our list of connections.
        connections.push([i, tempCol]);
    }

    // If the amount of connections is above 4 return true.
    if (connections.length >= 4) {
        return connections;
    }

    // Resetting connections.
    connections = [[r, c]];

    // Resetting tempCol:
    tempCol = c;

    // DIAGONAL CHECK (SLOPING DOWN LEFT):
    // Starting from one bellow the position the user placed a piece at and going BELLOW and LEFT:
    for (var i = r + 1; i <= 5; i++) {

        // If the position we are on does not equal the username, break.
        if (gameBoardList[i][tempCol - 1] !== userInfo.username) {
            break;
        }

        // Decrement tempCol.
        tempCol--;

        // Adding our found connection to our list of connections.
        connections.push([i, tempCol]);
    }

    // Resetting tempCol:
    tempCol = c;

    // Starting from one above the position the user placed a piece at and going UP and RIGHT:
    for (var i = r - 1; i >= 0; i--) {

        // If the position we are on does not equal the username, break.
        if (gameBoardList[i][tempCol + 1] !== userInfo.username) {
            break;
        }

        // Increment tempCol.
        tempCol++;

        // Adding our found connection to our list of connections.
        connections.push([i, tempCol]);
    }

    // If the amount of connections is above 4 return true.
    if (connections.length >= 4) {
        return connections;
    }

    // Resetting connections.
    connections = [[r, c]];

    return connections;
}

function gameOver( oppDisconnect = false ) {

    // Resetting the local information about the user's game.
    userInfo.opponent = null;   // Setting the opponent to null.
    userInfo.move = 0;          // Setting the move count to 0.
    userInfo.turn = false;      // Setting turn to false.

    socket.emit("gameEnded");

    // Removing the back button from the screen.
    document.getElementById("endGameDiv").style.display = "none";

    // Taking the user out of the game screen to the home screen.
    document.getElementById("gameScreen").style.display = "none";
    document.getElementById("startScreen").style.display = "flex";

    // For every row that was used:
    for (var r = 0; r < gameBoardList.length; r++) {

        // For every column that was used:
        for (var c = 0; c < 7; c++) {

            // If the game board is not null at that position:
            if (gameBoardList[r][c] !== null) {

                // Get the position at which it is not null:
                var pieceDown = document.getElementById("r" + r + "c" + c);

                // Reset the colors used.
                pieceDown.style.backgroundColor = "white";
                pieceDown.style.borderColor = "black";
            }
        }
    }

    // If the opponent disconnected:
    if (oppDisconnect) {
        alert("Your opponent disconnected!");
    }

}