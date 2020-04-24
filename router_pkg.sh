npm install --save-dev react-router-dom

cd src
rm index.js

echo "import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root'

ReactDOM.render(<Root/>, document.getElementById('root'))
" >> index.js

echo 'import React from "react"
import { BrowserRouter } from "react-router-dom"
import App from "./App"

const Root = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

export default Root;
' >> Root.js

echo 'import React from "react"
import { Route } from "react-router-dom"

class App extends React.Component {
    render () {
        return (
            <div>
                Main
            </div>
        )
    };
}

export default App;
' >> App.js

rm ./component/App.js
cd ..
