// accessing html 
let body = document.querySelector("body");
let board = document.querySelector("#board");
let cell = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset")
let turnNo = document.querySelector("#turnNo")
let msg = document.querySelector("#winnerMsg")

//taking input 
let choice = prompt("what you want to choose")

// winning possibilities
let winnPattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
]

// deciding turn
let turn = "";
if(choice === "x" || choice === "X"){
    turn = "playerX";
    turnNo.innerHTML = "||player X turn||"
}
else if(choice === "o" || choice === "O"){
    turn = "playerO"
    turnNo.innerHTML = "||player O turn||"
}
else{
    choice = prompt("invalid innput. choose between X and O")
}

let click = 0;
// playing game
cell.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn === "playerX"){
            box.classList.add("x")
            box.classList.remove("o")
            box.innerHTML = "<b>X</b>"
            turn = "playerO";
            turnNo.innerHTML = "||player O turn||"
        }
           else if(turn === "playerO"){
            box.classList.add("o")
            box.classList.remove("x")
            box.innerHTML = "<b>O</b>"
            turn = "playerX";
           turnNo.innerHTML = "||player X turn||"
           }
           box.disabled = true;

   click++

// checking winner after every click
   let foundWinner = checkWinner();

   if(click == 9 && !foundWinner){
    msg.classList.remove("hide")
    msg.innerHTML = `ooops it was a draw click reset and start a new game`
   }

    })

// reset button function
    cell.forEach((box)=>{
      resetBtn.addEventListener("click",()=>{
        click = 0;
        box.innerHTML ="";
        box.disabled = false;
        msg.classList.add("hide")
      })
    })
})

// actual function for winner
let checkWinner = () =>{
    for(let val of winnPattern){
        let posfirst= cell[val[0]].innerHTML;
        let posscnd = cell[val[1]].innerHTML;
        let posthrd = cell[val[2]].innerHTML;
       
        if(posfirst != "" && posscnd != "" && posthrd != ""){
            if(posfirst == posscnd && posscnd == posthrd){
               winner(posfirst);
        }
    }
       }
}

// declaring winner
const winner = (player)=>{
    msg.classList.remove("hide")
    for(let btn of cell){
        btn.disabled = true;
    }
    if(player === "<b>X</b>")
     {
        msg.innerHTML = `yayyy player X won the match`
    }
    else{
        msg.innerHTML = `yayyy player O won the match`
    }

}

