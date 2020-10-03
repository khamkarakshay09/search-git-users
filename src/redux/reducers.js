import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import userReducer from "./users/reducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
    // rest of your reducers
  });
export default createRootReducer;
