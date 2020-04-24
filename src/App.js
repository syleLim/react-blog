import React from "react"
import { Route } from "react-router-dom"
import { Home, PostList, Post } from "./pages"

class App extends React.Component {
    render () {
        return (
            <div>
                Main
                <Route exact path="/" component={Home}/>
                <Route path="/postlist" component={PostList}/>
                <Route path="/post" component={Post}/>
            </div>
        )
    };
}

export default App;

