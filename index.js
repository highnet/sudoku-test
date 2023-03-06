import { SudokuClient } from "./sudokuClient.js";

let sudoku = new SudokuClient();
var puzzle = sudoku.getPuzzle();
var solution = sudoku.getSolution(puzzle);

for (let i = 0; i <= 8; i++) {
    console.log(puzzle[0 + i * 9], puzzle[1 + i * 9], puzzle[2 + i * 9], puzzle[3 + i * 9], puzzle[4 + i * 9], puzzle[5 + i * 9], puzzle[6 + i * 9], puzzle[7 + i * 9], puzzle[8 + i * 9]);
}

for (let i = 0; i <= 8; i++) {
    console.log(solution[0 + i * 9], solution[1 + i * 9], solution[2 + i * 9], solution[3 + i * 9], solution[4 + i * 9], solution[5 + i * 9], solution[6 + i * 9], solution[7 + i * 9], solution[8 + i * 9]);
}

console.log(puzzle);
console.log(solution);