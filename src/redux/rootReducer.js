import { combineReducers } from 'redux'
import carReducer from 'cars/carReducer'
import motoReducer from './moto/motoReducer'

const rootReducer = combineReducers({
    cars: carReducer,
    motos: motoReducer
})

export default rootReducer
