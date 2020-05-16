import React 	from "react"
import { NavLink } from "react-router-dom";
import { List }	from "immutable"

import { Line, 
			HomePreviewStyle } 	from "../../styles"
import { PreviewBoxStyle,
			PreviewAuther,
			PreviewContent,
			PreviewDate,
			PreviewTitle,
			StyleLink }	from "../../styles"

const HomePreview = ({previewItems}) => {
	const previewList = previewItems.map(item => {
		const { categoryId, postId, title,  author, date, content } = item
		return (
			<div>
				<PreviewBoxStyle>
					<PreviewTitle>
						<StyleLink to={`/post/${categoryId}/${postId}`}>
							{title}
						</StyleLink>
					</PreviewTitle>
					<PreviewAuther>{author}</PreviewAuther>
					<PreviewDate>{date}</PreviewDate>
					<PreviewContent>{content.slice(0,4)}</PreviewContent>
				</PreviewBoxStyle>
				<Line/>
			</div>
		)
	})

	return (
		<HomePreviewStyle>
			{previewList}
			
		</HomePreviewStyle>
	)
}

export default HomePreview