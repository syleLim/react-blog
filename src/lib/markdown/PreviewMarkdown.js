import React from "react"
import PropTypes from "prop-types"
import ReactMarkDown from "react-markdown"
import { previewText,
		 previewCodeBlock,
		 previewInlineCodeBlock,
		 previewHeader } from "./MarkDownStyle"

const PreviewMarkDown = ({content}) => {
	return (
		<ReactMarkDown source={content}
							skipHtml={false}
							escapeHtml={false}
							renderers={{
								text		: previewText,
								heading		: previewHeader,
								code		: previewCodeBlock,
								inlineCode	: previewInlineCodeBlock
							}}/>
	)
}

PreviewMarkDown.propTypes = {
	content	: PropTypes.string
}

export default PreviewMarkDown;