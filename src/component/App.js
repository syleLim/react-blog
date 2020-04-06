import React from 'react'
import Page from './Page.js'
import List from './List.js'
import Md from './Md.js'
import styled , { css } from 'styled-components'

const Main = styled.div`
    text-align: center;
`;

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
            <Main>
                <h1>My React App</h1>
                <Page>TESTING</Page>
                <List posts={posts} />
                <Md />
            </Main>
        )
    };
}

export default App;