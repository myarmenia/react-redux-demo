import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { buyCar } from '../redux'

function HooksCarContainer(props) {
    const numOfCars = useSelector(state => state.numOfCars)
    const dispatch = useDispatch()
    return (
        <div>
           <h1> Num of Cars - {numOfCars}</h1>
        <button onClick={() => dispatch(buyCar())}>Buy now</button>
        </div>
    );
}

export default HooksCarContainer;