import {compose, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import mainCoctailsReducer from "./Reducer/mainCoctailsReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    coctailsPage: mainCoctailsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

window.store = store;

export default store;