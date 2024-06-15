const board = new Array(3);

let playerOne;
let playerTwo;

let playerOneName = " ";
let playerTwoName = " ";

let oddPick = true;
let firstAdded = false;
let secondAdded = false;
let canPlay = false;
let win = false;

let onePicked, twoPicked, threePicked, fourPicked, fivePicked, sixPicked, sevenPicked, eightPicked, ninePicked = false;

function clearBoard(){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            board[i][j] = " ";
            oddPick = true;
            win = true;

            console.log("hello")
            let array = ["x1", "x2", "x3", "x4", "x5", "x6",
            "x7", "x8", "x9", "o1", "o2", "o3", "o4", "o5",
            "o6", "o7", "o8", "o9",]
            for(let i = 0; i < array.length; i++){

                let shape = document.querySelector("." + array[i])
                shape.style.display = "none";
            }
            onePicked = false;
            twoPicked = false
            threePicked = false
            fourPicked = false
            fivePicked = false
            sixPicked = false
            sevenPicked = false
            eightPicked = false
            ninePicked = false;

            let one = document.querySelector("#one")
            one.onclick = function(){
                if(!onePicked){
                    if(canPlay && !win || canPlay && !tie()){
                        if(oddPick){
                            playerOne.pickSpace(0,0)
                            var x = document.querySelector(".x1");
                            x.style.display = "block";
                            oddPick = false;
                        } else {
                            playerTwo.pickSpace(0,0)
                            var o = document.querySelector(".o1");
                            o.style.display = "block"
                            oddPick = true;
                        }
                    } else {
                        alert("Start the game first")
                    }
                    onePicked= true;
                }
            }

            let two = document.querySelector("#two")
            two.onclick = function(){
                if(!twoPicked){
                    if(canPlay && !win || canPlay && !tie()){
                        if(oddPick){
                            playerOne.pickSpace(0,1)
                            var x = document.querySelector(".x2");
                            x.style.display = "block";
                            oddPick = false;
                        } else {
                            playerTwo.pickSpace(0,1)
                            var o = document.querySelector(".o2");
                            o.style.display = "block"
                            oddPick = true;
                        }
                    } else {
                        alert("Start the game first")
                    }
                    twoPicked=true;
                }
            }

            let three = document.querySelector("#three")
            three.onclick = function(){
                if(!threePicked){
                    if(canPlay && !win || canPlay && !tie()){
                        if(oddPick){
                            playerOne.pickSpace(0,2)
                            var x = document.querySelector(".x3");
                            x.style.display = "block";
                            oddPick = false;
                        } else {
                            playerTwo.pickSpace(0,2)
                            var o = document.querySelector(".o3");
                            o.style.display = "block"
                            oddPick = true;
                        }
                    }else {
                        alert("Start the game first")
                    }
                    threePicked = true;
                }
            }

            let four = document.querySelector("#four")
            four.onclick = function(){
                if(!fourPicked){
                    if(canPlay && !win || canPlay && !tie()){
                        if(oddPick){
                            playerOne.pickSpace(1,0)
                            var x = document.querySelector(".x4");
                            x.style.display = "block";
                            oddPick = false;
                        } else {
                            playerTwo.pickSpace(1,0)
                            var o = document.querySelector(".o4");
                            o.style.display = "block"
                            oddPick = true;
                        }
                    } else {
                        alert("Start the game first")
                    }
                    fourPicked=true;             
                }
            }

            let five = document.querySelector("#five")
            five.onclick = function(){
                if(!fivePicked){
                    if(canPlay && !win || canPlay && !tie()){
                        if(oddPick){
                            playerOne.pickSpace(1,1)
                            var x = document.querySelector(".x5");
                            x.style.display = "block";
                            oddPick = false;
                        } else {
                            playerTwo.pickSpace(1,1)
                            var o = document.querySelector(".o5");
                            o.style.display = "block"
                            oddPick = true;
                        }
                    } else {
                        alert("Start the game first")
                    }
                    fivePicked  =true;
                }
            }

            let six = document.querySelector("#six")
            six.onclick = function(){
                if(!sixPicked){
                    if(canPlay && !win || canPlay && !tie()){
                        if(oddPick){
                            playerOne.pickSpace(1,2)
                            var x = document.querySelector(".x6");
                            x.style.display = "block";
                            oddPick = false;
                        } else {
                            playerTwo.pickSpace(1,2)
                            var o = document.querySelector(".o6");
                            o.style.display = "block"
                            oddPick = true;
                        }
                    } else {
                        alert("Start the game first")
                    }
                    sixPicked = true;
                }
            }

            let seven = document.querySelector("#seven")
            seven.onclick = function(){
                if(!sevenPicked){
                    if(canPlay && !win || canPlay && !tie()){
                        if(oddPick){
                            playerOne.pickSpace(2,0)
                            var x = document.querySelector(".x7");
                            x.style.display = "block";
                            oddPick = false;
                        } else {
                            playerTwo.pickSpace(2,0)
                            var o = document.querySelector(".o7");
                            o.style.display = "block"
                            oddPick = true;
                        }
                    } else {
                        alert("Start the game first")
                    }
                    sevenPicked= true;
                }
            }

            let eight = document.querySelector("#eight")
            eight.onclick = function(){
                if(!eightPicked){
                    if(canPlay && !win || canPlay && !tie()){
                        if(oddPick){
                            playerOne.pickSpace(2,1)
                            var x = document.querySelector(".x8");
                            x.style.display = "block";
                            oddPick = false;
                        } else {
                            playerTwo.pickSpace(2,1)
                            var o = document.querySelector(".o8");
                            o.style.display = "block"
                            oddPick = true;
                        }
                    } else {
                        alert("Start the game first")
                    }
                    eightPicked = true;
                }
            }

            let nine = document.querySelector("#nine")
            nine.onclick = function(){
                if(!ninePicked){
                    if(canPlay && !win || canPlay && !tie()){
                        if(oddPick){
                            playerOne.pickSpace(2,2)
                            var x = document.querySelector(".x9");
                            x.style.display = "block";
                            oddPick = false;
                        } else {
                            playerTwo.pickSpace(2,2)
                            var o = document.querySelector(".o9");
                            o.style.display = "block"
                            oddPick = true;
                        }
                    } else {
                        alert("Start the game first")
                    }
                    ninePicked = true;
                }
            }
        }
    }
}

function tie(){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(board[i][j] == " "){
                return false;
            }
        }
    }

    if(!checkForWin(playerOne.marker) && !checkForWin(playerTwo.marker)){
        return true;
    }
}

function checkForWin(marker){
    for (let i = 0, j = 0; i < 3; i++) {
        if(board[i][j] == board[i][j+1] && board[i][j] == board[i][j+2]){
            if(board[i][j] == marker && board[i][j+1] == marker && board[i][j+2] == marker){
                win = true;
                return true;
            }
        }

        if(board[j][i] == board[j+1][i] && board[j][i] == board[j+2][i]){
            if(board[j][i] == marker && board[j+1][i] == marker && board[j+1][i] == marker){
                win = true;
                return true;
            }
        }

        if(i == 0){
            if(board[i][j] == board[i+1][j+1] && board[i][j]== board[i+2][j+2]){
                if(board[i][j] == marker && board[i+1][j+1] == marker && board[i+2][j+2] == marker){
                    win = true;
                    return true;
                }
            }
        } else if (i == 2){
            if(board[i][j] == board[i-1][j+1] && board[i][j] == board[i-2][j+2]){
                if(board[i][j] == marker && board[i-1][j+1] == marker && board[i-2][j+2] == marker){
                    win = true;
                    return true;
                }
            }
        }
    }

    return false;
}

function createPlayerOne (name){
    const displayName = "Player One: " + name;
    const marker = "x"
    console.log(name + " has entered the game")

    const pickSpace = (i, j) => {
        if(oddPick){
            if(board[i][j] == " "){
                board[i][j] = marker;
            }
    
            if(checkForWin(marker)){
                setTimeout(function() {alert(name + " has won"); }, 200);
            }
    
            if(tie()){
                setTimeout(function() {alert("the game has ended in a tie"); }, 200);
            }
        }
    }

    return { displayName, marker, pickSpace};
}

function createPlayerTwo (name){
    const displayName = "Player Two: " + name;
    const marker = "o"
    console.log(name + " has also entered the game")

    const pickSpace = (i, j) => {
        if(!oddPick){
            if(board[i][j] == " "){
                board[i][j] = marker;
            }
    
            if(checkForWin(marker)){
                setTimeout(function() {alert(name + " has won"); }, 200);
            }
    
            if(tie()){
                setTimeout(function() {alert("the game has ended in a tie"); }, 200);
            }
        }
    }
    return { displayName, marker, pickSpace};
}

let game = function createBoard(name1, name2){
    playerOne = createPlayerOne(name1);
    playerTwo = createPlayerTwo(name2);

    for (let i = 0; i < 3; i++) {
        board[i] = []
        for (let j = 0; j < 3; j++) {
            board[i][j] = " ";
        }
    }

    return {playerOne, playerTwo, board}
}

let add1 = document.querySelector(".add1")
add1.onclick = function() {
    firstAdded = true;
    playerOneName = document.querySelector(".player-one").value
}

let add2 = document.querySelector(".add2")
add2.onclick = function() {
    secondAdded = true;
    playerTwoName = document.querySelector(".player-two").value
}

let start = document.querySelector(".start")
start.onclick = function(){
    if(firstAdded && secondAdded){
        canPlay = true;
        game(playerOneName, playerTwoName)
    } else {
        alert("Enter Player 1 and 2 names")
    }
}

let clear = document.querySelector(".clear")
clear.onclick = function() {
    console.log("hi")
    clearBoard();
}

    let one = document.querySelector("#one")
    one.onclick = function(){
        if(!onePicked){
            if(canPlay && !win || canPlay && !tie()){
                if(oddPick){
                    playerOne.pickSpace(0,0)
                    var x = document.querySelector(".x1");
                    x.style.display = "block";
                    oddPick = false;
                } else {
                    playerTwo.pickSpace(0,0)
                    var o = document.querySelector(".o1");
                    o.style.display = "block"
                    oddPick = true;
                }
            } else {
                alert("Start the game first")
            }
            onePicked= true;
        }
    }

    let two = document.querySelector("#two")
    two.onclick = function(){
        if(!twoPicked){
            if(canPlay && !win || canPlay && !tie()){
                if(oddPick){
                    playerOne.pickSpace(0,1)
                    var x = document.querySelector(".x2");
                    x.style.display = "block";
                    oddPick = false;
                } else {
                    playerTwo.pickSpace(0,1)
                    var o = document.querySelector(".o2");
                    o.style.display = "block"
                    oddPick = true;
                }
            } else {
                alert("Start the game first")
            }
            twoPicked=true;
        }
    }

    let three = document.querySelector("#three")
    three.onclick = function(){
        if(!threePicked){
            if(canPlay && !win || canPlay && !tie()){
                if(oddPick){
                    playerOne.pickSpace(0,2)
                    var x = document.querySelector(".x3");
                    x.style.display = "block";
                    oddPick = false;
                } else {
                    playerTwo.pickSpace(0,2)
                    var o = document.querySelector(".o3");
                    o.style.display = "block"
                    oddPick = true;
                }
            }else {
                alert("Start the game first")
            }
            threePicked = true;
        }
    }

    let four = document.querySelector("#four")
    four.onclick = function(){
        if(!fourPicked){
            if(canPlay && !win || canPlay && !tie()){
                if(oddPick){
                    playerOne.pickSpace(1,0)
                    var x = document.querySelector(".x4");
                    x.style.display = "block";
                    oddPick = false;
                } else {
                    playerTwo.pickSpace(1,0)
                    var o = document.querySelector(".o4");
                    o.style.display = "block"
                    oddPick = true;
                }
            } else {
                alert("Start the game first")
            }
            fourPicked=true;             
        }
    }

    let five = document.querySelector("#five")
    five.onclick = function(){
        if(!fivePicked){
            if(canPlay && !win || canPlay && !tie()){
                if(oddPick){
                    playerOne.pickSpace(1,1)
                    var x = document.querySelector(".x5");
                    x.style.display = "block";
                    oddPick = false;
                } else {
                    playerTwo.pickSpace(1,1)
                    var o = document.querySelector(".o5");
                    o.style.display = "block"
                    oddPick = true;
                }
            } else {
                alert("Start the game first")
            }
            fivePicked  =true;
        }
    }

    let six = document.querySelector("#six")
    six.onclick = function(){
        if(!sixPicked){
            if(canPlay && !win || canPlay && !tie()){
                if(oddPick){
                    playerOne.pickSpace(1,2)
                    var x = document.querySelector(".x6");
                    x.style.display = "block";
                    oddPick = false;
                } else {
                    playerTwo.pickSpace(1,2)
                    var o = document.querySelector(".o6");
                    o.style.display = "block"
                    oddPick = true;
                }
            } else {
                alert("Start the game first")
            }
            sixPicked = true;
        }
    }

    let seven = document.querySelector("#seven")
    seven.onclick = function(){
        if(!sevenPicked){
            if(canPlay && !win || canPlay && !tie()){
                if(oddPick){
                    playerOne.pickSpace(2,0)
                    var x = document.querySelector(".x7");
                    x.style.display = "block";
                    oddPick = false;
                } else {
                    playerTwo.pickSpace(2,0)
                    var o = document.querySelector(".o7");
                    o.style.display = "block"
                    oddPick = true;
                }
            } else {
                alert("Start the game first")
            }
            sevenPicked= true;
        }
    }

    let eight = document.querySelector("#eight")
    eight.onclick = function(){
        if(!eightPicked){
            if(canPlay && !win || canPlay && !tie()){
                if(oddPick){
                    playerOne.pickSpace(2,1)
                    var x = document.querySelector(".x8");
                    x.style.display = "block";
                    oddPick = false;
                } else {
                    playerTwo.pickSpace(2,1)
                    var o = document.querySelector(".o8");
                    o.style.display = "block"
                    oddPick = true;
                }
            } else {
                alert("Start the game first")
            }
            eightPicked = true;
        }
    }

    let nine = document.querySelector("#nine")
    nine.onclick = function(){
        if(!ninePicked){
            if(canPlay && !win || canPlay && !tie()){
                if(oddPick){
                    playerOne.pickSpace(2,2)
                    var x = document.querySelector(".x9");
                    x.style.display = "block";
                    oddPick = false;
                } else {
                    playerTwo.pickSpace(2,2)
                    var o = document.querySelector(".o9");
                    o.style.display = "block"
                    oddPick = true;
                }
            } else {
                alert("Start the game first")
            }
            ninePicked = true;
        }
    }