import React from "react"
import { Route } from "react-router-dom"
import { HomePage, PostListPage, PostPage } from "./pages"
import { CategoryComponent } from "./component"

class App extends React.Component {
    render () {
        return (
            <div>
                <CategoryComponent />
                <Route exact path="/" component={HomePage}/>
                <Route path="/postlist" component={PostListPage}/>
                <Route path="/post" component={PostPage}/>
            </div>
        )
    };
}

export default App;

