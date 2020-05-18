import React from "react"
import PropTypes from "prop-types"
import ReactMarkDown from "react-markdown"
import { inlineCodeBlock, codeBlock } from "./MarkDownStyle"

const PostMarkDown = ({content}) => {
	return (
		<ReactMarkDown source={content}
					skipHtml={false}
					escapeHtml={false}
					renderers={{ 
								code		: codeBlock,
								inlineCode	: inlineCodeBlock
							}}/>
	)
}

PostMarkDown.propTypes = {
	content	: PropTypes.string
}

export default PostMarkDown;