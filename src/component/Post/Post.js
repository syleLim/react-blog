import React from "react"
import PropTypes from "prop-types"
import ImmutablePropTyps from "react-immutable-proptypes"
import { PostStyle } from "../../styles"
import { List, Record } from "immutable"

const PostCompoenet = ({posts, id}) => {
	const postBox = posts.map(e => {
		if (e.postId === id) {
			return (
				<PostStyle>
					<h2>{e.title}</h2>
					<h3>{e.date}</h3>
					<h4>{e.content}</h4>
				</PostStyle>
			)
		}
	})

	return (
		<div>
			{postBox}
		</div>
	)
}

PostCompoenet.propTypes = {
	id		: PropTypes.number,
	posts	: ImmutablePropTyps.listOf(
		ImmutablePropTyps.recordOf({
			postId	: PropTypes.number,
			title	: PropTypes.string,
			date	: PropTypes.string,
			content	: PropTypes.string
		})
	)
};

PostCompoenet.defaultProps = {
	id		: 1,
	posts 	: List([
		Record({
			postId	: 0,
			title	: "postId 0",
			date	: "post 0 date",
			content	: "post 0"
		})(),
		Record({
			postId	: 1,
			title	: "postId 1",
			date	: "post 1 date",
			content	: "post 1"
		})()
	])
};

export default PostCompoenet;