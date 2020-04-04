import React from 'react'
<<<<<<< HEAD
import Page from './Page.js'
import List from './List.js'
=======
import Btn from './Btn.js'
import styles from './App.css'
>>>>>>> d4495d2de43a58bffcf84b3777048f6e9b6cf0fb

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
<<<<<<< HEAD
                <h1>My React App</h1>
                <Page>TESTING</Page>
                <List posts={posts} />
=======
                <h1 className={styles.font}>My React App</h1>
                <Btn>??</Btn>
                <div className={styles.box}>sibal</div>
>>>>>>> d4495d2de43a58bffcf84b3777048f6e9b6cf0fb
            </div>
        )
    };
}