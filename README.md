# Tic-Tac-Toe

### 🛠️ Key Technical Implementations

#### 1. Event Delegation
Instead of attaching individual event listeners to each of the 9 cells, I utilized **Event Delegation**. I attached a single listener to the parent `.board` container. 
* **How it works:** When a cell is clicked, the event "bubbles" up to the board. 
* **Why use it:** This is more memory-efficient and ensures that the logic is centralized in one place rather than being duplicated across nine different functions.

#### 2. The `classList` API
I used the `classList` property to manage the visual state of the game dynamically.
* **Functionality:** When a player makes a move, `classList.add('x')` or `classList.add('o')` is called.
* **Why use it:** This separates the game logic from the styling. It allows the CSS to handle the colors and animations of the symbols, while the JavaScript simply manages which class is active.