import React from "react"
import PropTypes from "prop-types"
import ImmutablePropTyps from "react-immutable-proptypes"
import { PostStyle } from "../../styles"
import { Map, List, fromJS } from "immutable"

const PostCompoenet = ({title, date, content}) => {
	return (
		<PostStyle>
			<h2>{title}</h2>
			<h3>{date}</h3>
			<h4>{content}</h4>
		</PostStyle>
	)
}

PostCompoenet.propTypes = {
	title	: PropTypes.string,
	date	: PropTypes.string,
	content	: PropTypes.string
};

PostCompoenet.defaultProps = {
	title	: "Post",
	date	: "date",
	content	: "content"
};

export default PostCompoenet;