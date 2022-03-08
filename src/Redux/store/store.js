import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import rootReducers from "../reducers/index"

let store = createStore(rootReducers, applyMiddleware(thunk, logger))

export default store