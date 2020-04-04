import React from 'react'
import Page from './Page.js'
import List from './List.js'

export default class App extends React.Component {
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
            <div>
                <h1>My React App</h1>
                <Page>TESTING</Page>
                <List posts={posts} />
            </div>
        )
    };
}