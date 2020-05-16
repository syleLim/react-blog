import React from "react"
import { Route } from "react-router-dom"
import { AppStyle, GlobalStyles } from "./styles"
import { HomePage, PostListPage, PostPage } from "./pages"
import { CategoryContainer } from "./containers"

class App extends React.Component {
    render () {
        return (
            <AppStyle>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/postlist/:id" component={PostListPage}/>
                <Route path="/post/:categoryId/:postId" component={PostPage}/>
                <CategoryContainer />
            </AppStyle>
        )
    };
}

export default App;

