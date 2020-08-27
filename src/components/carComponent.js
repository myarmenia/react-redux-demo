import React from 'react'
import { connect } from 'react-redux'
import { buyCar } from '../redux'

function CarComponent(props) {
    return (
        <div>
            <h1>Number of Cars - { props.numOfCars }</h1>
            <button onClick={props.buyCar}>Buy Car</button>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        numOfCars: state.cars.numOfCars
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyCar: () => dispatch(buyCar())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CarComponent);