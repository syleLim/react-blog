import React, { Component } from 'react'

class List extends Component {
    render () {
        const { posts } = this.props;

        const contentsList = posts.map(
            (post, i) => (
                <div key={i}>
                    <h2>{post.title}</h2>
                    {post.contents}
                </div>
            )
        )
        
        return (
            <div>
                {contentsList}
            </div>
        )
    }
}

export default List;