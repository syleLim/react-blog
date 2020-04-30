import React from "react"
import { NavLink } from "react-router-dom";
import { PostPreviewStyle } from "../../styles"
import PropTypes from "prop-types"
import ImmutablePropTypes from "react-immutable-proptypes"

const PostPreview = ({post}) => {
	const { postId, title, date, preview, author} = post;

	return (
		<PostPreviewStyle>
			<h3>
				<NavLink to={`/post/${postId}`}>
					{title}
				</NavLink>
			</h3>
			<h6>{date}</h6>
			<h6>{preview}</h6>
			<p>{author}</p>
		</PostPreviewStyle>
	)
};


export default PostPreview;
