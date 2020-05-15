import React 	from "react"
import { List }	from "immutable"

import { Line, 
			HomePreviewStyle } 	from "../../styles"
import { HomePreviewBoxStyle,
			HomePreviewAuther,
			HomePreviewContent,
			HomePreviewDate,
			HomePreviewTitle}	from "../../styles"

const HomePreview = ({previewItems}) => {
	const previewList = previewItems.map(item => {
		const { title,  author, date, content} = item
		return (
			<div>
				<HomePreviewBoxStyle>
					<HomePreviewTitle>{title}</HomePreviewTitle>
					<HomePreviewAuther>{author}</HomePreviewAuther>
					<HomePreviewDate>{date}</HomePreviewDate>
					<HomePreviewContent>{content.slice(0,4)}</HomePreviewContent>
				</HomePreviewBoxStyle>
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