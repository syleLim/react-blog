import React                    from "react"
import { BrowserRouter }        from "react-router-dom"
import { createStore,
			applyMiddleware,
			compose }			from "redux"
import { Provider }             from "react-redux"
import penderMiddleWare         from "redux-pender"

import { AppContainer } from "./containers"
import modules from "./modules"
import penderMiddleware from "redux-pender/lib/middleware"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(modules, composeEnhancers(applyMiddleware(penderMiddleware())));

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

