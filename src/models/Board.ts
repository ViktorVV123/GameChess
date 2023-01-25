import {Cell} from "./Cell";
import {Colors} from "./Colors";
import {Queen} from "./figurs/Queen";
import {Bishop} from "./figurs/Bishop";
import {King} from "./figurs/King";
import {Knight} from "./figurs/Knight";
import {Pawn} from "./figurs/Pawn";
import {Rook} from "./figurs/Rook";

export class Board {
    cells: Cell[][] = []


    public initCells() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = []
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 !== 0) {
                    row.push(new Cell(this, j, i, Colors.BLACK, null)) // Черные ячейки
                } else {
                    row.push(new Cell(this, j, i, Colors.WHITE, null)) // белые
                }
            }
            this.cells.push(row);
        }
    }

    public getCopeBoard():Board {
        const newBoard = new Board()
        newBoard.cells = this.cells
        return newBoard
    }


    public hightLightCells(selectedCell: Cell | null) {
        for (let i = 0; i < this.cells.length; i++) {
            const row = this.cells[i];
            for (let j = 0; j < row.length; j++) {
                const target = row [j]
                target.available = !!selectedCell?.figure?.canMove(target) // выдает либо тру или фолс если может походить фигура или нет и при помощи !! преобразовали к boolean флагу
            }
        }
    }

    public getCell(x: number, y: number) {
        return this.cells[y][x]
    }


    private addPawns() {
        for (let i = 0; i < 8; i++) {
            new Pawn(Colors.BLACK, this.getCell(1, i))
            new Pawn(Colors.WHITE, this.getCell(6, i))
        }
    }

    private addQueen() {
        new Queen(Colors.BLACK, this.getCell(0, 3))
        new Queen(Colors.WHITE, this.getCell(7, 3))
    }

    private addKing() {
        new King(Colors.BLACK, this.getCell(0, 4))
        new King(Colors.WHITE, this.getCell(7, 4))
    }

    private addKnight() {
        new Knight(Colors.BLACK, this.getCell(0, 1))
        new Knight(Colors.BLACK, this.getCell(0, 6))
        new Knight(Colors.WHITE, this.getCell(7, 6))
        new Knight(Colors.WHITE, this.getCell(7, 1))
    }

    private addRook() {
        new Rook(Colors.BLACK, this.getCell(0, 0))
        new Rook(Colors.BLACK, this.getCell(0, 7))
        new Rook(Colors.WHITE, this.getCell(7, 7))
        new Rook(Colors.WHITE, this.getCell(7, 0))
    }

    private addBishop() {
        new Bishop(Colors.BLACK, this.getCell(0, 2))
        new Bishop(Colors.BLACK, this.getCell(0, 5))
        new Bishop(Colors.WHITE, this.getCell(7, 5))
        new Bishop(Colors.WHITE, this.getCell(7, 2))
    }


    //public addFisherFigurs(){
    //     для игры по правилам фишера задаем сами как нам надо
    // }

    public addFigures() {
        this.addKing()
        this.addKnight()
        this.addPawns()
        this.addKnight()
        this.addBishop()
        this.addRook()
        this.addQueen()

        /*  new Queen(Colors.WHITE, this.getCell(0, 4))
          new Bishop(Colors.WHITE, this.getCell(0, 2))
          new Bishop(Colors.WHITE, this.getCell(0, 5))
          new King(Colors.WHITE, this.getCell(0, 3))
          new Knight(Colors.WHITE, this.getCell(0, 1))
          new Knight(Colors.WHITE, this.getCell(0, 6))
          new Rook(Colors.WHITE, this.getCell(0, 0))
          new Rook(Colors.WHITE, this.getCell(0, 7))
          new Pawn(Colors.WHITE, this.getCell(1, 0))
          new Pawn(Colors.WHITE, this.getCell(1, 1))
          new Pawn(Colors.WHITE, this.getCell(1, 2))
          new Pawn(Colors.WHITE, this.getCell(1, 3))
          new Pawn(Colors.WHITE, this.getCell(1, 4))
          new Pawn(Colors.WHITE, this.getCell(1, 5))
          new Pawn(Colors.WHITE, this.getCell(1, 6))
          new Pawn(Colors.WHITE, this.getCell(1, 7))*/

    }

}