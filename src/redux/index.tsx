/** @format */

import { persistCombineReducers } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { reducer as UserRedux } from "./UserRedux";

const config: any = {
  key: "root",
  storage: AsyncStorage
};

export default persistCombineReducers(config, {
  user: UserRedux
});
