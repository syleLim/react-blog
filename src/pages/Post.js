import React from "react"
import { PostComponent } from "../component"

const PostPage = ({match}) => {
    return (
        <PostComponent 
            id={Number(match.params.id)}
        />
    );
}

export default PostPage;