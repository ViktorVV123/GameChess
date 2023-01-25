import React, {useEffect, useState} from 'react';
import '../App.css'
import {Board} from "../models/Board";
import {CellComponent} from "./CellComponent";
import {Cell} from "../models/Cell";


type BoardProps = {
    board: Board
    setBoard: (board: Board) => void
}


export const BoardComponent = (props: BoardProps) => {


    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    const click = (cell: Cell) => {
        if(cell.figure){
            setSelectedCell(cell)
        }

    }
    useEffect(()=>{
        hightLightCells()
    },[selectedCell])


const hightLightCells = () =>{
        props.board.hightLightCells(selectedCell)
    updateBoard()
}

    const updateBoard = () => {
        const newBoard = props.board.getCopeBoard()
        props.setBoard(newBoard)
    }

    return (
        <div className={'board'}>
            {props.board.cells.map((row, index) => {
                return (
                    <div key={index}>
                        {row.map((cell) => {
                            return (
                                <div>
                                    <CellComponent cell={cell} key={cell.id}
                                                   selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                                    click={click}


                                    />
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    );
};

