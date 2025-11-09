let boxes = document.querySelectorAll(".box");
let res = document.querySelector("#resett");
let turnO = true;
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
let neww = document.querySelector("#new");
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
let count=0;
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO == true){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableBoxes =() =>
{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes =() =>
{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) =>{
    msg.innerText = `congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}
const checkWinner = () => {
    for(let pattern of winPatterns) {
        // console.log(pattern[0],
        //     pattern[1],
        //     pattern[2])
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );
        let val1= boxes[pattern[0]].innerText;
        let val2= boxes[pattern[1]].innerText;
        let val3= boxes[pattern[2]].innerText;
        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 == val2 && val2 == val3){
                console.log("WINNER",val1);
                disableBoxes();
                showWinner(val1);
            }
        
        }
    };
};
neww.addEventListener("click", resetGame);
res.addEventListener("click", resetGame);