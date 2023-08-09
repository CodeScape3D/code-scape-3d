import { useState } from "react";

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);

    const incrementCounter = (steps = 1) => {
        setCounter(current => current + steps);
    }

    const decrementCounter = (steps = 1) => { 
        setCounter(current => current - steps);
    }

    const resetCounter = () => { 
        setCounter(initialValue);
    }

    return {
        counter,
        incrementCounter,
        decrementCounter,
        resetCounter
    }

}