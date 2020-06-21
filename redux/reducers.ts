import { combineReducers } from 'redux'
import latestPostsReducer from "./latestPostsReducer";
import postReducer from "./postReducer";

// COMBINED REDUCERS
const reducers = combineReducers({
  latestPostsReducer,
  postReducer
})

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;

export default reducers
