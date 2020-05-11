import React from "react"
import { NavLink } from "react-router-dom";
import { PostPreviewStyle } from "../../styles"

const PostPreview = ({categoryId, postId, post}) => {
	const { title, author, date, content} = post;

	return (
		<PostPreviewStyle>
			<h3>
				<NavLink to={`/post/${categoryId}/${postId}`}>
					{title}
				</NavLink>
			</h3>
			<h6>{date}</h6>
			<h6>{content.slice(0,4)}...</h6>
			<p>{author}</p>
		</PostPreviewStyle>
	)
};


export default PostPreview;
