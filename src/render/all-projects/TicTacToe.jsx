import React from 'react';
import BaseInput from '../../components/BaseInput';
import { players as initialPlayers } from '../../utilities/mock';
import { formReducer as playerReducer } from '../../utilities/reducers';
// https://github.com/ByteGrad/portfolio-website

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
        return <button className="h-16 text-lg text-violet-600 border border-black rounded" onClick={onClick} disabled={Boolean(winner)} />;
    }
    return (
        <button className={`h-16 text-lg text-violet-600 border border-black rounded ${value.toLocaleLowerCase()}`} disabled>
            {value}
        </button>
    )
}

const Board = ({ firstPlayer, secondPlayer }) => {
    const [winner, setWinner] = React.useState(null);
    const [squares, setSquares] = React.useState(Array(9).fill(null));
    const [activePlayer, setActivePlayer] = React.useState(Math.round(Math.random() * 1) === 1 ? firstPlayer : secondPlayer);

    React.useEffect(() => {
        const result = calculateWinner(squares);
        if (result) setWinner(result);
        if (!result && !squares.filter((square) => !square).length) setWinner("BOTH");
    });

    function setSquareValue(index) {
        const newData = squares.map((val, i) => {
            if (i === index) return activePlayer;
            return val;
        });
        setSquares(newData);
        setActivePlayer(activePlayer === firstPlayer ? secondPlayer : firstPlayer);
    }
    return (
        <div className="flex flex-row gap-5">
            <div className="">
                <h2 className="text-base">
                    {!winner && <p className="text-xl text-slate-600 mb-3">It's your turn: <span className="font-medium font-serif text-blue-500">{activePlayer}</span></p>}
                    {winner && winner !== "BOTH" && <p>Congratulations {winner}</p>}
                    {winner && winner === "BOTH" && <p>It's a tie for both of you</p>}
                </h2>
                <div className="w-52 grid grid-cols-3 gap-2 justify-center">
                    {Array(9).fill(null).map((_, i) => <Square winner={winner} key={i} onClick={() => setSquareValue(i)} value={squares[i]} />)}
                </div>
            </div>
            <div className="history">
                Who Wins first round
            </div>
        </div>
    );
}

const TicTacToe = () => {
    // https://dummyimage.com/400x400/ffffff/0011ff&text=AS
    const [initiate, setInitiate] = React.useState(false);
    const [playerName, dispatchPlayerName] = React.useReducer(playerReducer, initialPlayers);
    const { firstPlayer, secondPlayer, gameMode } = playerName;

    function reset() {
        setInitiate(false);
    }

    function handleElementChange(event) {
        const { name, value } = event.target;
        dispatchPlayerName({ type: "UPDATE_VALUE", name, value });
    }
    
    return (
        <div className="md:w-3/4 lg:w-2/4 px-4 py-6 mx-auto space-y-4 bg-stone-50 shadow rounded">
            <h2 className="text-4xl text-cyan-500 text-center underline decoration-wavy underline-offset-2 mb-6">Tic Tac Toe</h2>
            <div className="lg:w-1/2 space-y-3 border rounded-md p-2">
                <div className="flex flex-col gap-3">
                    <div className="">
                        <label htmlFor="first-player" className="text-base text-gray-500 tracking-wide font-medium">First Player</label>
                        <input
                            id="first-player"
                            name="firstPlayer"
                            className="form-element"
                            value={firstPlayer.value}
                            onChange={handleElementChange}
                        />
                    </div>
                    <div className="">
                        <label htmlFor="second-player" className="text-base text-gray-500 tracking-wide font-medium">Second Player</label>
                        <input
                            id="second-player"
                            name="secondPlayer"
                            className="form-element"
                            value={secondPlayer.value}
                            onChange={handleElementChange}
                        />
                    </div>
                    <div className="">
                        <p className="text-base text-gray-500 tracking-wide font-medium">Choose Mode:</p>
                        <div className="relative flex flex-row items-center justify-center flex-wrap">
                            <input className="absolute invisible peer/todo" type="checkbox" id="three*three" value="three*three" checked={gameMode === 'three*three'} onChange={handleElementChange} />
                            <label htmlFor="three*three" className="w-full flex items-center justify-between select-none cursor-pointer px-3 py-4 overflow-hidden hover:bg-neutral-100 peer-checked/todo:bg-neutral-200 rounded-md shadow tranisition">3*3</label>
                        </div>
                        <div className="relative flex flex-row items-center justify-center flex-wrap">
                            <input className="absolute invisible peer/todo" type="checkbox" id="five*five" value="five*five" checked={gameMode === 'five*five'} onChange={handleElementChange} />
                            <label htmlFor="five*five" className="w-full flex items-center justify-between select-none cursor-pointer px-3 py-4 overflow-hidden hover:bg-neutral-100 peer-checked/todo:bg-neutral-200 rounded-md shadow tranisition">5*5</label>
                        </div>
                    </div>
                </div>
                
                <div className="flex gap-3">
                    <button className="btn btn-primary" onClick={() => setInitiate(true)}>
                        START
                    </button>
                    <button className="btn btn-warning" onClick={reset}>
                        RESET
                    </button>
                </div>
            </div>
            {initiate && <Board firstPlayer={firstPlayer.value} secondPlayer={secondPlayer.value} />}
        </div>
    );
}
 
export default TicTacToe;