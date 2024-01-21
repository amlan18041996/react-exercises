import React from 'react';
import BaseInput from '../../components/BaseInput';
import { players as initialPlayers } from '../../utilities/mock';
import { formReducer as playerReducer } from '../../utilities/reducers';

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

const Square = ({value, onClick, winner}) => {
    if (!value) {
        return <button className="w-24 h-24 text-lg text-violet-600 border border-black rounded" onClick={onClick} disabled={Boolean(winner)} />;
    }
    return (
        <button className={`w-24 h-24 text-lg text-violet-600 border border-black rounded ${value.toLocaleLowerCase()}`} disabled>
            {value}
        </button>
    )
}

const TicTacToe = () => {
    const [winner, setWinner] = React.useState(null);
    const [squares, setSquares] = React.useState(Array(9).fill(null));
    const [playerName, dispatchPlayerName] = React.useReducer(playerReducer, initialPlayers);
    const [currentPlayer, setCurrentPlayer] = React.useState(Math.round(Math.random() * 1) === 1 ? "X" : "O");

    const { firstPlayer, secondPlayer } = playerName;

    function reset() {
        setWinner(null);
        setSquares(Array(9).fill(null));
        setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O");
    }
    
    function setSquareValue(index) {
        const newData = squares.map((val, i) => {
            if (i === index) return currentPlayer;
            return val;
        });
        setSquares(newData);
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
    
    React.useEffect(() => {
        const result = calculateWinner(squares);
        if (result) setWinner(result);
        if (!result && !squares.filter((square) => !square).length) setWinner("BOTH");
    });

    function handleElementChange(event) {
        const { name, value } = event.target;
        dispatchPlayerName({ type: "UPDATE_VALUE", name, value });
    }
    
    return (
        <div className="grid grid-cols-2 gap-x-4 gap-y-5">
            <div className="w-80 space-y-3">
                <div className="flex gap-3">
                    <BaseInput
                        id="first-player"
                        name="firstPlayer"
                        classes="form-element"
                        value={firstPlayer.value}
                        onChange={handleElementChange}
                    />
                    <BaseInput
                        id="second-player"
                        name="secondPlayer"
                        classes="form-element"
                        value={secondPlayer.value}
                        onChange={handleElementChange}
                    />
                </div>
                {!winner && <p>Hey {currentPlayer}, it's your turn</p>}
                {winner && winner !== "BOTH" && <p>Congratulations {winner}</p>}
                {winner && winner === "BOTH" && (
                    <p>Congratulations you're both winners</p>
                )}
                <div className="flex gap-3">
                    <button className="btn btn-primary" onClick={reset}>
                        START
                    </button>
                    <button className="btn btn-warning" onClick={reset}>
                        RESET
                    </button>
                </div>
            </div>
            <div className="w-80 grid grid-cols-3 gap-2 justify-center">
                    {
                        Array(9)
                        .fill(null)
                        .map((_, i) => {
                            return (
                                <Square
                                    winner={winner}
                                    key={i}
                                    onClick={() => setSquareValue(i)}
                                    value={squares[i]}
                                />
                            );
                        })
                    }
            </div>
        </div>
    );
}
 
export default TicTacToe;