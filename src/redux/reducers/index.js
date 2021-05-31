//
import { combineReducers } from "redux";
import courses from "./courseReducer";

// we pass combinedReucers as an object and each property is set to a corresponding reducer.
//this is typically set up if you have more than one reducer to pass. 
const rootReducer = combineReducers({
    //since this is an object we can remove the righthand side because it matches the lefthand side:
    // courses: courses,
    courses
});

export default rootReducer;
