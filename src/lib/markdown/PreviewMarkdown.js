import React from "react"
import PropTypes from "prop-types"
import ReactMarkDown from "react-markdown"
import { previewHeader } from "./MarkDownStyle"

const PreviewMarkDown = ({content}) => {
	return (
		<ReactMarkDown source={content} 
							renderers={{
								heading	: previewHeader,
								
							}}/>
	)
}

PreviewMarkDown.propTypes = {
	content	: PropTypes.string
}

export default PreviewMarkDown;