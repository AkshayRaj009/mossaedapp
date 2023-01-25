import { createStore, combineReducers, applyMiddleware} from 'redux';
import CommonReducers from './reducers/CommonReducers';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  CommonReducers
  
});

export const store = createStore(rootReducer,applyMiddleware(thunk));