let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelectorAll(".reset");
let turnX = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was clicked");
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (pattern of winPatterns) {
    // console.log(pattern); // Accessing each pattern
    // console.log(pattern[0], pattern[1], pattern[2]); Accessing individual indexes of the pattern
    // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]); Mapping each button with the indexs
    // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);Accessing the button's text at that position
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val && pos1Val === pos3Val) {
        console.log("Winner");
      }
    }
  }
};
