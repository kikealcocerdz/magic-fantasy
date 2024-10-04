import { useState, useEffect } from "react";
import reactLogo from "./assets/logoleague.png";
import viteLogo from "/vite.svg";
import "./App.css";
import PlayerRanking from "./components/PlayerRanking";

function App() {
  return (
    <>
      <div className="flex justify-start flex-col items-center mt-20">
        <div>
          <img src={reactLogo} className="w-44 rounded-full" alt="Vite logo" />
        </div>
        <h1 className="text-3xl font-bold p-4">MAGIC FANTASY</h1>
        <div className="w-full h-full p-20">
          <PlayerRanking />
        </div>
        <h3 className="text-2xl font-bold">Fechas</h3>
        <div className=" h-screen w-full p-20 text-black">
          <div className="grid grid-cols-4 gap-4 w-[90%]">
            <div className="bg-gray-200 p-4 flex flex-col justify-start h-auto rounded-lg">
              <h4 className="text-center text-xl font-bold">Jornada 1</h4>
              <div className="flex flex-col justify-center">
                <h5 className="text-left text-lg font-semibold">Partida 1</h5>
                <div className="flex flex-row justify-between">
                  <div>
                    <p>Player 1, Player 2, Player 3, Player 4</p>
                  </div>
                </div>
                <h5 className="text-left text-lg font-semibold">Partida 1</h5>
                <div className="flex flex-row justify-between">
                  <div>
                    <p>Player 1, Player 2, Player 3, Player 4</p>
                  </div>
                </div>
                <h5 className="text-left text-lg font-semibold">Descansan</h5>
                <div className="flex flex-row justify-between">
                  <div>
                    <p>Player 1, Player 2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
