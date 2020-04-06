import React from 'react'
import Page from './Page.js'
import List from './List.js'
import Md from './Md.js'
import { AppCss } from '../style/style.js'

class App extends React.Component {
    constructor(props)
    {
        super (props);
        this.state = {
            posts : [
                {title : 'first', contents : 'FIRST'},
                {title : 'second', contents : 'SECOND'}
            ]
        };
    };

    render() {
        const { posts } = this.state;
        return(
            <AppCss>
                <h1>My React App</h1>
                <Page>TESTING</Page>
                <List posts={posts} />
                <Md />
            </AppCss>
        )
    };
}

export default App;