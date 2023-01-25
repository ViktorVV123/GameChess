import React, {useEffect, useState} from 'react';

import './App.css';
import {BoardComponent} from "./components/BoardComponent";
import {Board} from "./models/Board";

function App() {

    const [board,setBoard]=useState(new Board())

useEffect(()=>{
    //чтобы вызывался рестарт во время игры новой
    restart()
},[])


const restart = () =>{
        const newBoard= new Board()// новая партия игры
    newBoard.initCells()
newBoard.addFigures()
    setBoard((newBoard))
}




  return (
    <div className="app">
<BoardComponent board={board} setBoard={setBoard}/>
    </div>
  );
}

export default App;
