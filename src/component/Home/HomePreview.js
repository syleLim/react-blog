import React from "react"
import { HomePreviewStyle, HomePreviewBoxStyle } from "../../styles"
import { List } from "immutable"

const HomePreview = ({previewItems}) => {
	const previewList = previewItems.map(item => {
		const { title,  author, date, content} = item
		return (
			<HomePreviewBoxStyle>
				<h1>{title}</h1>
				<p>{author}</p>
				<p>{date}</p>
				<p>{content.slice(0,4)}</p>
			</HomePreviewBoxStyle>
		)
	})

	return (
		<HomePreviewStyle>
			{previewList}
		</HomePreviewStyle>
	)
}

export default HomePreview