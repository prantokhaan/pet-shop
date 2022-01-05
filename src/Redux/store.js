import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { alertReducer } from "./Reducers/alertReducer";
import {foodReducer} from "./Reducers/foodReducer";
const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
  alertReducer,
  foodReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
