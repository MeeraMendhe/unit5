import { combineReducers, createStore } from "redux";
import { app } from "./app/reducer";
import { authReducer } from "./Login/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  app: app
});

export const store = createStore(rootReducer);
