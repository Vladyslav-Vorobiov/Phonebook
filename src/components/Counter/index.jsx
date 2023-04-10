import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../../store/slices/contacts';

const Counter = () => {
    const count = useSelector(state => state.counter.value);
    const another = useSelector(state => state.counter.another)
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count} {another}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

// export default Counter