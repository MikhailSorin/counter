import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";

function App() {
    const [count, setCounter] = useState<number>(0)
    const [minValue, setMinValue] = useState<string>('')
    const [maxValue, setMaxValue] = useState<string>('')
    const [untilSet, setUntilSet] = useState<boolean>(false)

    useEffect(() => {
        let countStr = localStorage.getItem('counter')
        if (countStr) setCounter(JSON.parse(countStr))
        let minValueSTR = localStorage.getItem('minValue')
        if (minValueSTR) setMinValue(minValueSTR)
        let maxValueSTR = localStorage.getItem('maxValue')
        if (maxValueSTR) setMaxValue(maxValueSTR)

        let untilSetStr = localStorage.getItem('untilSet')
        if (untilSetStr) setUntilSet(Boolean(untilSetStr))
    }, [])

    useEffect(() => {
        localStorage.setItem('counter', JSON.stringify(count))
    }, [count])
    useEffect(() => {
        localStorage.setItem('minValue', minValue)
    }, [minValue])
    useEffect(() => {
        localStorage.setItem('maxValue', maxValue)
    }, [maxValue])

    useEffect(() => {
        localStorage.setItem('untilSet', JSON.stringify(untilSet))
    }, [untilSet])

    return (
        <div>
            <Counter setCounter={setCounter}
                     count={count}
                     setMinValue={setMinValue}
                     minValue={minValue}
                     setMaxValue={setMaxValue}
                     maxValue={maxValue}
                     setUntilSet={setUntilSet}
                     untilSet={untilSet}
            />
        </div>
    );
}

export default App;
