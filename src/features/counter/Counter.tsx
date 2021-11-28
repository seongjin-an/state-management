import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {increment, decrement, fetchIncrement, incrementByAmount} from './counterStore'

export default () => {
    const count = useSelector((state:RootState) => state.counter.value)
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(fetchIncrement(count))}>Increment</button>
                <span>{count}</span>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
            </div>
        </div>
    )
}