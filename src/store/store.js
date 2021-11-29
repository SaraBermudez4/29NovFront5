import { createStore, combineReducers } from 'redux'
import { citasReducer } from '../reducers/citasReducer'

const reducers = combineReducers({
    citas: citasReducer
})

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store