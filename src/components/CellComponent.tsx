import React from 'react';
import '../App.css'
import {Cell} from "../models/Cell";


type CellComponentProps = {
    cell: Cell
    selected: boolean
    click: (cell: Cell) => void
}

export const CellComponent = (props: CellComponentProps) => {
    return (
        <div className={['cell', props.cell.color, props.selected ? 'selected' : ''].join(' ')}
             onClick={() => props.click(props.cell)}
             style={{backgroundColor: props.cell.available &&!props.cell.figure ? 'green' : ""}}
        >
            {/*'cell'  + ' ' + props.cell.color
            ['cell', props.cell.color].join(' ')
            */}
            {props.cell.available &&!props.cell.figure &&<div className={'available'}></div>}
            {props.cell.figure?.logo && <img src={props.cell.figure.logo} alt={'logo'}/>}
        </div>
    );
};

