import { SudokuEngine } from "./sudokuEngine.js";

export class SudokuClient {
    _engine;
    constructor() {
        this._engine = new SudokuEngine();
    }

    getPuzzle() {
        return this._engine.makepuzzle(this._engine.solvepuzzle(Array(81).fill(null)));
    }

    getSolution(puzzle) {
        return this._engine.solvepuzzle(puzzle);
    }
}