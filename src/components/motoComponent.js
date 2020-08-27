import React from 'react'
import { connect } from 'react-redux'
import { buyMoto } from '../redux'

function MotoComponent(props) {
    return (
        <div>
            <h1>Number of Mots - { props.numOfMotos }</h1>
            <button onClick={props.buyMoto}>Buy Moto</button>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        numOfMotos: state.motos.numOfMotos
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyMoto: () => dispatch(buyMoto())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(MotoComponent);