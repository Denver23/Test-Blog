import { combineReducers } from 'redux'
import postsReducer from "./postsReducer";

// COMBINED REDUCERS
const reducers = {
  postsReducer
}

export default combineReducers(reducers)
