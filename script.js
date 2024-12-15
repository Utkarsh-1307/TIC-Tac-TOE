let boxes = document.querySelectorAll(".box");
let reBtn = document.querySelector("#reSet");
let newBtn = document.querySelector("#new-Set");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

let winningPatterns = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];


boxes.forEach( (box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWin();
    });

   
});
const checkWin = () => {
    for (let pattern of winningPatterns) {
        let pos0Value = boxes[pattern[0]].innerText;
        let pos1Value = boxes[pattern[1]].innerText;
        let pos2Value = boxes[pattern[2]].innerText;

        
        if (pos0Value !== "" && pos1Value !== "" && pos2Value !== "") {
            if (pos0Value === pos1Value && pos1Value === pos2Value) {
                console.log("Winner");
                showWin();
                 
                return true;
            }
        }
    }
    return false; 
};
const showWin = (winner) => {
    msg.innerText = (`Congratulation , you are Winner ${winner}`);
    msgContainer.classList.remove("hide");
   }  