import React from "react"
import { Route } from "react-router-dom"
import { AppStyle } from "../../styles"
import { HomePage, PostListPage, PostPage } from "../../pages"
import { CategoryContainer } from "../../containers"
import { Footer, Header } from "../"

class AppComponent extends React.Component {
    render () {
        return (
            <div>
                <Header />
                <AppStyle>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/postlist/:id" component={PostListPage}/>
                    <Route path="/post/:categoryId/:postId" component={PostPage}/>
                    <CategoryContainer />
                </AppStyle>
                <Footer />
            </div>
        )
    };
}

export default AppComponent;

