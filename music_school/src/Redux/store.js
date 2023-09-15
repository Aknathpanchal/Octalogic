import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore as createStore,
  } from "redux";

import thunk from "redux-thunk";

import {getCourseDataReducer,addCourseDataReducer} from "./Courses/reducer";

const rootReducer = combineReducers({
    getCourses: getCourseDataReducer,
    addCourses: addCourseDataReducer,
});
  
  //reduxtool
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(thunk));
  
  //store
  export const store = createStore(rootReducer, enhancer);