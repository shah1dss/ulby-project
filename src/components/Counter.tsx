import React, {useState} from 'react';
import classes from './Counter.module.scss'

export const Counter = () => {
    const [counter,setCounter] = useState(0)

    const inc = () => setCounter(counter + 1)
    return (
        <div className={classes.button}>
            <h1>{counter}</h1>
            <button onClick={inc}>inc</button>
        </div>
    );
};