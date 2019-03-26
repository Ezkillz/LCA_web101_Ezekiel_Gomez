//.1.set up game board
//. Clear all X's and O's from the board
//.Decide who makes first move. 
//
//.2 PLayer clicks a spot on the board, mark the board if it is unoccupied, else give an error message
//
//.3 Check if the game is finished after marking the board
//. if the game if finished , then ouytputs a message indicating winner
//. if the game is not finnished then the other player make a move
//.Step 3 repeats until the game is finished
//
//.4 Prompt players to decide of they want to play new game.
//. If yes, then goes back to step 1.

var xturn=true;

function move(className){




    var thisTile=document.getElementsByClassName(className)[0];
    if(xturn){
        thisTile.appendChild(document.createTextNode("X"));
        thisTile.setAttribute("style","text-align:center; font-size: 150px;");
        xturn=!xturn;
        console.log(xturn);
    }
    else if(!xturn){
        thisTile.appendChild(document.createTextNode("O"));
        thisTile.setAttribute("style","text-align:center; font-size: 150px;");
        xturn=!xturn;
        console.log(xturn);
    }
}