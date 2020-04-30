import React from "react"
import { Route } from "react-router-dom"
import { AppStyle } from "./styles"
import { HomePage, PostListPage, PostPage } from "./pages"
import { CategoryComponent } from "./component"

class App extends React.Component {
    render () {
        return (
            <AppStyle>
                <CategoryComponent />
                <Route exact path="/" component={HomePage}/>
                <Route path="/postlist/:id" component={PostListPage}/>
                <Route path="/post/:id" component={PostPage}/>
            </AppStyle>
        )
    };
}

export default App;

