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
				<Line/>
				<PreviewBoxStyle>
					<PreviewAuther>{author}</PreviewAuther>
					<PreviewDate>/ {date}</PreviewDate>
					<PreviewTitle>
						<StyleLink to={`/post/${categoryId}/${postId}`}>
							{title}
						</StyleLink>
					</PreviewTitle>
					<PreviewContent>{content.slice(0,4)}</PreviewContent>
				</PreviewBoxStyle>
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