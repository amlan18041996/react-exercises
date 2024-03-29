import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BaseDropdown from './components/BaseDropdown'

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <button onClick={() => setCount((count) => count + 1)}>Count is {count}</button>
            <BaseDropdown />
        </div>
    )
}

export default App
