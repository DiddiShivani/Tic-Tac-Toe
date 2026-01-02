const boardElement = document.getElementById('board');
const statusText = document.getElementById('status');
const restartBtn = document.getElementById('restart');

let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""]; 
let gameActive = true;

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]             
];

boardElement.addEventListener('click', (e) => {
    const clickedCell = e.target;
    const clickedIndex = clickedCell.getAttribute('data-index');

    if (gameState[clickedIndex] !== "" || !gameActive) return;

    handleCellPlayed(clickedCell, clickedIndex);
    handleResultValidation();
});

function handleCellPlayed(cell, index) {
    gameState[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer.toLowerCase());
}

function handleResultValidation() {
    let roundWon = false;

    for (let condition of winningConditions) {
        let [a, b, c] = condition;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusText.textContent = `Player ${currentPlayer} Wins!`;
        gameActive = false;
        confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.6 },
            colors: ['#6c5ce7', '#00b894', '#fab1a0']
        });
        return;
    }

    if (!gameState.includes("")) {
        statusText.textContent = "It's a Draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s Turn`;
}

restartBtn.addEventListener('click', () => {
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    statusText.textContent = "Player X's Turn";
    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = "";  
        cell.classList.remove('x', 'o'); 
    });
});