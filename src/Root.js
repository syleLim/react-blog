import React from "react"
import { BrowserRouter } from "react-router-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import ReduxThunk from "redux-thunk"

import AppContainer from "./containers"
import modules from "./modules"

const store = createStore(modules, applyMiddleware(ReduxThunk));

const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppContainer />
            </BrowserRouter>
        </Provider>
    );
}

export default Root;

