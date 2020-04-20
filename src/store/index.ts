import { combineReducers, createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';

import { cartReducer } from "./cart/reducers"
import { inventoryReducer } from "./inventory/reducers";

const rootReducer = combineReducers({
    cart: cartReducer,
    inventory: inventoryReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware()
        )
    );

    return store;
}