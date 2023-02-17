import {createStore,combineReducers, applyMiddleware} from 'redux'
// import CommonReducre from "../../../VIPAPP/src/Redux/reducers/CommonReducre"
import thunk from 'redux-thunk'
import CommonReducre from '../Redux/reducers/CommonReducre'
const rootReducers = combineReducers({
    CommonReducre
})

export const store = createStore(rootReducers,applyMiddleware(thunk));