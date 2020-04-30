import React from "react"
import { PostListComponent } from "../component"
import { Route } from "react-router-dom"

const PostListPage = ({match}) => {
    return (
        <PostListComponent
            id={Number(match.params.id)}
        />
    );
}

export default PostListPage;