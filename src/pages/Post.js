import React from "react"
import { PostContainer } from "../containers"

const PostPage = ({match}) => {
    console.log(match.params)
    return (
        <PostContainer
            categoryId={Number(match.params.categoryId)}
            postId={Number(match.params.postId)}
        />
    );
}

export default PostPage;