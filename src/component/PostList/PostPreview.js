import React from "react"
import { NavLink } from "react-router-dom";

import { PreviewBoxStyle,
			PreviewTitle,
			PreviewAuther,
			PreviewDate,
			PreviewContent,
			StyleLink }	from "../../styles"

const PostPreview = ({post}) => {
	const { categoryId, postId, title, author, date, content} = post;

	return (
		<PreviewBoxStyle>
			<PreviewTitle>
				<StyleLink to={`/post/${categoryId}/${postId}`}>
					{title}
				</StyleLink>
			</PreviewTitle>
			<PreviewAuther>{author}</PreviewAuther>
			<PreviewDate>{date}</PreviewDate>
			<PreviewContent>{content.slice(0,4)}...</PreviewContent>
			
		</PreviewBoxStyle>
	)
};


export default PostPreview;
