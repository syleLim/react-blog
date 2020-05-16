import React from "react"
import { BrowserRouter } from "react-router-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"

import App from "./App"
import modules from "./modules"
import { GlobalStyles } from "./styles"

const store = createStore(modules)

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

