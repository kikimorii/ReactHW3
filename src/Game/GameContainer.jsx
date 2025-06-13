import GameLayout from "./GameLayout";
import { useState } from "react";

export default function Game() {
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [isDraw, setIsDraw] = useState(false);
    const [isGameEnded, setIsGameEnded] = useState(false);
    const [field, setField] = ["", "", "", "", "", "", "", "", ""];

    return (
        <GameLayout
            currentPlayer={currentPlayer}
            isDraw={isDraw}
            isGameEnded={isGameEnded}
            field={field}
            setCurrentPlayer={setCurrentPlayer}
            setIsDraw={setIsDraw}
            setIsGameEnded={setIsGameEnded}
            setField={setField}
        />
    );
}
