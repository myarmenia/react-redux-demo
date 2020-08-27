import { createStore } from 'redux'
import carReducer from './cars/carReducer'
import rootReducer from './rootReducer'

const store = createStore(rootReducer)

export default store