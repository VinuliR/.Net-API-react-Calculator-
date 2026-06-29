import './App.css'
import { NumPadButton } from './components/NumPadButton.jsx'
import { useState } from "react";

function App() {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    return (
        <>
            <h1>Calculator</h1>
            <h2>Enter Equation</h2>

            <label>
                <input value={ input} />
                <button>Enter</button>
            </label>
            <div>
                <NumPadButton display="1" onClick={handleClick} />
            <NumPadButton display="2" onClick={handleClick} />
                <NumPadButton display="3" onClick={handleClick} />
            </div>

            <div>
                <NumPadButton display="4" onClick={handleClick} />
                <NumPadButton display="5" onClick={handleClick} />
                <NumPadButton display="6" onClick={handleClick} />
            </div>
            <div>
                <NumPadButton display="7" onClick={handleClick} />
                <NumPadButton display="8" onClick={handleClick} />
                <NumPadButton display="9" onClick={handleClick} />
            </div>
            <div>
                <NumPadButton display="0" onClick={handleClick} />
            </div>
            <br />
            <div className="signpad">
                <NumPadButton display="+" onClick={handleClick} />
                <NumPadButton display="-" onClick={handleClick} />
                <NumPadButton display="*" onClick={handleClick} />
                <NumPadButton display="/" onClick={handleClick} />
                <NumPadButton display="%" onClick={handleClick} />
                
                <NumPadButton display="(" onClick={handleClick} />
                <NumPadButton display=")" onClick={handleClick} />
            </div>

            <br/>
            <label>
                {/*{output}*/}
            </label>


        </>
    )
}

export default App