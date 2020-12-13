// Added to Cart
var uncharted1Added = false;
var uncharted2Added = false;
var uncharted3Added = false;
var uncharted4Added = false;
var tlouAdded = false;
var tlouP2Added = false;
var gowAdded = false;
var spiderManAdded = false;
var hzdAdded = false;

// Searched
var uncharted1Searched = false;
var uncharted2Searched = false;
var uncharted3Searched = false;
var uncharted4Searched = false;
var tlouSearched = false;
var tlouP2Searched = false;
var gowSearched = false;
var spiderManSearched = false;
var hzdSearched = false;

var gameNames = {
    unch1: "uncharted 1: drake's deception",
    unch2: "uncharted 2: among thieves",
    unch3: "uncharted 3: drake's deception",
    unch4: "uncharted 4: a thief's end",
    tlou: "the last of us",
    tlou2: "the last of us part 2",
    gow4: "god of war 4",
    spdman: "spider-man",
    hzd: "horizon zero dawn"
};

/**
 * Show the cart and hide the game library
 */
function viewCart() {
    if (uncharted1Added) {
        let mythingy = document.getElementById("uncharted1Cart");
        mythingy.style.display = "inline";
    }
    if (uncharted2Added) {
        let mythingy = document.getElementById("uncharted2Cart");
        mythingy.style.display = "inline";
    }
    if (uncharted3Added) {
        let mythingy = document.getElementById("uncharted3Cart");
        mythingy.style.display = "inline";
    }
    if (uncharted4Added) {
        let mythingy = document.getElementById("uncharted4Cart");
        mythingy.style.display = "inline";
    }
    if (tlouAdded) {
        let mythingy = document.getElementById("tlouCart");
        mythingy.style.display = "inline";
    }
    if (tlouP2Added) {
        let mythingy = document.getElementById("tlouP2Cart");
        mythingy.style.display = "inline";
    }
    if (gowAdded) {
        let mythingy = document.getElementById("gowCart");
        mythingy.style.display = "inline";
    }
    if (spiderManAdded) {
        let mythingy = document.getElementById("spiderManCart");
        mythingy.style.display = "inline";
    }
    if (hzdAdded) {
        let mythingy = document.getElementById("hzdCart");
        mythingy.style.display = "inline";
    }
    let cartTable = document.getElementById("cartTable");
    let bookList = document.getElementById("bookList");
    bookList.style.display = "none";
    cartTable.style.display = "inline";
}

/**
 * Set items as marked true if the user ads them
 * @param {1-9} gameId gameID  
 */
function addToCard(gameId) {
    if (gameId == 1) {
        uncharted1Added = true;
    } else if (gameId == 2) {
        uncharted4Added = true;
    } else if (gameId == 3) {
        gowAdded = true;
    } else if (gameId == 4) {
        uncharted2Added = true;
    } else if (gameId == 5) {
        tlouAdded = true;
    } else if (gameId == 6) {
        spiderManAdded = true;
    } else if (gameId == 7) {
        uncharted3Added = true;
    } else if (gameId == 8) {
        tlouP2Added = true;
    } else {
        hzdAdded = true;
    }
}

/**
 * show the list of 
 */
function showListBooks() {
    let cartTable = document.getElementById("cartTable");
    let bookList = document.getElementById("bookList");
    bookList.style.display = "flex";
    cartTable.style.display = "none";

    // Search display
    let unch1 = document.getElementById("uncharted1Card");
    let unch2 = document.getElementById("uncharted2Card");
    let unch3 = document.getElementById("uncharted3Card");
    let unch4 = document.getElementById("uncharted4Card");
    let tlou = document.getElementById("tlouCard");
    let tlouP2 = document.getElementById("tlouP2Card");
    let gow = document.getElementById("gowCard");
    let spdMan = document.getElementById("spdManCard");
    let hzd = document.getElementById("hzdCard");

    unch1.style.display = "flex";
    unch2.style.display = "flex";
    unch3.style.display = "flex";
    unch4.style.display = "flex";
    tlou.style.display = "flex";
    tlouP2.style.display = "flex";
    gow.style.display = "flex";
    spdMan.style.display = "flex";
    hzd.style.display = "flex";
}

function removeBook(gameNum) {
    if (gameNum == 1) {
        uncharted1Added = false;
        let unch1 = document.getElementById("uncharted1Cart");
        unch1.style.display = "none";
    } else if (gameNum == 2) {
        uncharted4Added = false;
        let unch4 = document.getElementById("uncharted4Cart");
        unch4.style.display = "none";
    } else if (gameNum == 3) {
        gowAdded = false;
        let gow = document.getElementById("gowCart");
        gow.style.display = "none";
    } else if (gameNum == 4) {
        uncharted2Added = false;
        let unch2 = document.getElementById("uncharted2Cart");
        unch2.style.display = "none";
    } else if (gameNum == 5) {
        tlouAdded = false;
        let tlou = document.getElementById("tlouCart");
        tlou.style.display = "none";
    } else if (gameNum == 6) {
        spiderManAdded = false;
        let spd = document.getElementById("spiderManCart");
        spd.style.display = "none";
    } else if (gameNum == 7) {
        uncharted3Added = false;
        let unch3 = document.getElementById("uncharted3Cart");
        unch3.style.display = "none";
    } else if (gameNum == 8) {
        tlouP2Added = false;
        let tlouP2 = document.getElementById("tlouP2Cart");
        tlouP2.style.display = "none";
    } else if (gameNum == 9) {
        hzdAdded = false;
        let hzd = document.getElementById("hzdCart");
        hzd.style.display = "none";
    }

}

function displayDetails(gameId) {
    if (gameId == 1) {
        alert("Naughty Dog's First Uncharted Installment in 2007")
    } else if (gameId == 2) {
        alert("Naughty Dog's Final Installment for the Uncharted Franchise in 2016")
    } else if (gameId == 3) {
        alert("Santa Monica's God of War 4 released in 2018")
    } else if (gameId == 4) {
        alert("Naughty Dog's Second Installment for the Uncharted Franchise in 2009")
    } else if (gameId == 5) {
        alert("Naughty Dog's First The Last of Us Installment in 2013")
    } else if (gameId == 6) {
        alert("Insomniac Game's First Exclusive Spider-Man Game in 2018")
    } else if (gameId == 7) {
        alert("Naughty Dog's Third Installment for the Uncharted Franchise in 2009")
    } else if (gameId == 8) {
        alert("Naughty Dog's Second The Last of Us Installment in 2020")
    } else {
        alert("Guerrilla Games's First Exclusive Game in 2017")
    }

}

//----------------------------------------------------------



function searchByKeyword() {
    setSearchedFalse();
    showListBooks();
    var input = document.getElementById("searchInput").value;
    if (input == null || input == "") {
        console.log("none");
    } else {
        contains(input.toLowerCase());
    }
    console.log("searchByKeyWord passed");
}

function contains(str) {
    for (let i in gameNames) {
        if (gameNames[i].includes(str)) {
            filterSearch(i);
        }
    }
    filterPageBySearch();
    console.log("contains passed");
}

/**
 * Display only those that are true
 */
function filterPageBySearch() {
    if (!uncharted1Searched) {
        let unch1 = document.getElementById("uncharted1Card");
        unch1.style.display = "none";
    }
    if (!uncharted2Searched) {
        let unch2 = document.getElementById("uncharted2Card");
        unch2.style.display = "none";
    }
    if (!uncharted3Searched) {
        let unch3 = document.getElementById("uncharted3Card");
        unch3.style.display = "none";
    }
    if (!uncharted4Searched) {
        let unch4 = document.getElementById("uncharted4Card");
        unch4.style.display = "none";
    }
    if (!tlouSearched) {
        let tlou = document.getElementById("tlouCard");
        tlou.style.display = "none";
    }
    if (!tlouP2Searched) {
        let tlouP2 = document.getElementById("tlouP2Card");
        tlouP2.style.display = "none";
    }
    if (!gowSearched) {
        let gow = document.getElementById("gowCard");
        gow.style.display = "none";
    }
    if (!spiderManSearched) {
        let spdMan = document.getElementById("spdManCard");
        spdMan.style.display = "none";
    }
    if (!hzdSearched) {
        let hzd = document.getElementById("hzdCard");
        hzd.style.display = "none";
    }
    console.log("filterPageBySearch passed");
}

/**
 * mark as true if it matches keyword
 * @param {*} str search keyword 
 */
function filterSearch(str) {
    if (str == "unch1") {
        uncharted1Searched = true;
    } else if (str == "unch2") {
        uncharted2Searched = true;
    } else if (str == "unch3") {
        uncharted3Searched = true;
    } else if (str == "unch4") {
        uncharted4Searched = true;
    } else if (str == "tlou") {
        tlouSearched = true;
    } else if (str == "tlou2") {
        tlouP2Searched = true;
    } else if (str == "gow4") {
        gowSearched = true;
    } else if (str == "spdman") {
        spiderManSearched = true;
    } else {
        hzdSearched = true;
    }
    console.log("filterSearch passed : " + str);
}

/**
 * Sets all search booleans to false
 */
function setSearchedFalse() {
    uncharted1Searched = false;
    uncharted2Searched = false;
    uncharted3Searched = false;
    uncharted4Searched = false;
    tlouSearched = false;
    tlouP2Searched = false;
    gowSearched = false;
    spiderManSearched = false;
    hzdSearched = false;
}