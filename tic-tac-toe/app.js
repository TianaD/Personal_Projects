// ==================================================================== Global Variables ====================================================================


let playerText = document.getElementById('playerText')
//create an array called boxes from all nine box classes in HTML
let boxes = Array.from(document.getElementsByClassName('box'))

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

// console.log(boxes)

const O_text = "O"
const X_text = "X"
let currentPlayer = X_text
let spaces = Array(9).fill(null)

// console.log(spaces)

const startGame = () => {
    //add event listener to divs (box) so that when clicked, "X" or "O" will appear
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

// ==================================================================== Click Logic ====================================================================

function boxClicked(e) {
    const id = e.target.id

    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        if(playerHasWon() !==false){
            playerText.innerHTML = `${currentPlayer} WINS!`
            let winningBlocks = playerHasWon()

            // console.log(winningBlocks)

            winningBlocks.map( box => boxes[box].style.backgroundColor=winnerIndicator)
            return
        }

        currentPlayer = currentPlayer == X_text ? O_text : X_text
    }
}

// ==================================================================== WIN Logic ====================================================================


const waysToWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


function playerHasWon(){
    for (const condition of waysToWin) {
        let [a, b, c] = condition

        // "if" statement checks criteria for winning combinations
        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])){
            return [a,b,c]            
        }
    }
    return false
}


startGame()



// create a stop player from continuing to click condition
// and maybe something spectacular for the winner