import React from 'react'

function Stopwatch() {
    let count = 0;
    return (
        <>
            <div className="stopwatch" >
                <h1>Stopwatch</h1>
                <div className="display">
                    <span>{Math.floor(count / 3600).toString().padStart(2, '0')}</span>:
                    <span>{Math.floor((count % 3600) / 60).toString().padStart(2, '0')}</span>:
                    <span>{(count % 60).toString().padStart(2, '0')}</span>
                </div>
                <button onClick={() => count++}>Start</button>
                <button onClick={() => count = 0}>Reset</button>
                <div>stopwatch</div>
            </div>
        </>
    )
}

export default Stopwatch