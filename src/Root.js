import React from "react"
import { BrowserRouter } from "react-router-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import ReduxThunk from "redux-thunk"

import App from "./App"
import modules from "./modules"

const store = createStore(modules, applyMiddleware(ReduxThunk));

const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
}

export default Root;

