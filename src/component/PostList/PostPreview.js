import React from "react"
import { NavLink } from "react-router-dom";

import { PostPreviewStyle,
			PreviewBoxStyle,
			PreviewTitle,
			PreviewAuther,
			PreviewDate,
			PreviewContent,
			StyleLink,
			Line }	from "../../styles"

const PostPreview = ({previewItems}) => {
	const previewList = previewItems.map(item => {
		const { categoryId, postId, title, author, date, content} = item;
		return (
			<div>
				<Line />
				<PreviewBoxStyle>
					<PreviewAuther>{author}</PreviewAuther>
					<PreviewDate> / {date}</PreviewDate>
					<PreviewTitle>
						<StyleLink to={`/post/${categoryId}/${postId}`}>
							{title}
						</StyleLink>
					</PreviewTitle>
					<PreviewContent>{content.slice(0,4)}...</PreviewContent>				
				</PreviewBoxStyle>
			</div>
		)
	})
	
	return (
		<PostPreviewStyle>
			{previewList}
		</PostPreviewStyle>
	)
};


export default PostPreview;
