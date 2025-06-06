
import { applyMiddleware, createStore } from "redux";
import {thunk} from "redux-thunk";
import reducers from "../redux";

const configureStore: any = () => {
  let store: any = null;
    store = createStore(
      reducers,
      applyMiddleware(thunk)
    );
  return store;
};

export default configureStore();
