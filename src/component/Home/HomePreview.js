import React 	from "react"
import { NavLink } from "react-router-dom";
import { List }	from "immutable"
import { PreviewMarkDown } from "../../lib"

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
					<PreviewContent>
						<PreviewMarkDown content={content} />
					</PreviewContent>
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