import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

//this function will take one argument which is initalState.
//So we can initalise our store with data when we configure it
export default function configureStore(initalState) {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //add support for redux devtools
    return createStore(
        rootReducer,
        initalState,
        //this middleware will warn us if we accidentally mutate the Redux State in the store
        composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
    );
}
