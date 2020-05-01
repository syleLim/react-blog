import React from "react"
import PropTypes from "prop-types"
import ReactMarkDown from "react-markdown"
import { inlineCodeBlock, codeBlock } from "./MarkDownStyle"

const MarkDown = ({content}) => {
	return (
		<ReactMarkDown source={content}
					renderers={{ 
								code		: codeBlock,
								inlineCode	: inlineCodeBlock
							}}/>
	)
}

MarkDown.propTypes = {
	content	: PropTypes.string
}

export default MarkDown;