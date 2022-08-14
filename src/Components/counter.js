import React, { useState } from 'react'

export const Counter = () => {

    const counterClass={
        'fontSize': '110px'
    }
    const [counter, setCount] = useState(0)

    const countPlus = (counter) => {
        setCount(counter = counter + 1)
    }

    const countMinus = (counter) => {
        setCount(counter = counter - 1)
    }

    const countReset = (counter) => {
        setCount(counter = 0)
    }
    return (
        <>
            <div className="row text-center">
                <div className="col">
                    <div className="counter">
                        <i className="fa fa-code fa-2x"></i>
                        <h2 className="timer count-title count-number">{}</h2>
                        <p className="count-text "style={counterClass}>{counter}</p>
                    </div>
                    
                    <button className="btn btn-sm btn-primary mr-2" onClick={() => countPlus(counter) }>Increment</button>
                    <button className="btn btn-sm btn-danger mr-2" onClick={() => countMinus(counter) }>Decrement</button>
                    <button className="btn btn-sm btn btn-secondary" onClick={() => countReset(counter) }>Reset</button>
                </div>
            </div>
        </>
    )
}
