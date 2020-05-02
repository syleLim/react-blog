import React from "react"
import { PostListContainer } from "../containers"
import { Route } from "react-router-dom"

const PostListPage = ({match}) => {
    return (
        <PostListContainer
            id={Number(match.params.id)}
        />
    );
}

export default PostListPage;