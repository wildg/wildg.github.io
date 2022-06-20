const rellax = new Rellax('.rellax');

let currIndicator = "indicator-1";

function removeCurr( c ) {
    $("#" + c).toggleClass("current");
}

function addCurr( c ) {
    $("#" + c).toggleClass("current");
}

$("#chewingCottonWool").waypoint(function() {
    removeCurr( currIndicator );
    currIndicator = "indicator-1";
    addCurr( currIndicator );
}, {offset: "50%"});

$("#goodAtFalling").waypoint(function(direction) {
    if (direction === "down") {
        removeCurr( currIndicator );
        currIndicator = "indicator-2";
        addCurr( currIndicator );
    }
    if (direction === "up") {
        removeCurr( currIndicator );
        currIndicator = "indicator-1";
        addCurr( currIndicator );
    }
}, {offset: "50%"});

$("#tour").waypoint(function(direction) {
    if (direction === "down") {
        removeCurr( currIndicator );
        currIndicator = "indicator-3";
        addCurr( currIndicator );
    }
    if (direction === "up") {
        removeCurr( currIndicator );
        currIndicator = "indicator-2";
        addCurr( currIndicator );
    }
}, {offset: "50%"});

$("#merch").waypoint(function(direction) {
    if (direction === "down") {
        removeCurr( currIndicator );
        currIndicator = "indicator-4";
        addCurr( currIndicator );
    }
    if (direction === "up") {
        removeCurr( currIndicator );
        currIndicator = "indicator-3";
        addCurr( currIndicator );
    }
}, {offset: "50%"});