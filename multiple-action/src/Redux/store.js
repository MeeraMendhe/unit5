import {createStore,combineReducers,applyMiddleware,compose} from "redux";
import {reducer} from "./Todo/reducer";
import {authReducer} from "./auth/reducer";

const rootReducer = combineReducers({
    auth:authReducer,
    app:reducer
})

const logger1=(store)=>(next)=>(action)=>{
    console.time("p1");
    next(action)
    console.timeEnd("p1");
}

export const store =createStore(
    rootReducer,  
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(logger1)) 
  );