import React from "react"
import PropTypes from "prop-types"
import ImmutablePropTyps from "react-immutable-proptypes"
import { List, Record } from "immutable"

import { PostStyle } from "../../styles"
import { MarkDown } from "../../lib"


const PostCompoenet = ({posts, id}) => {
	const postBox = posts.map(post => {
		if (post.postId === id) {
			return (
				<PostStyle>
					<h2>{post.title}</h2>
					<h3>{post.date}</h3>
					<MarkDown content={post.content} />
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
			content	: 	`# MarkDwon
## header
### content
\`\`\`
code block
\`\`\`
inline \`code\`
`
		})(),
		Record({
			postId	: 1,
			title	: "postId 1",
			date	: "post 1 date",
			content	: `# Post 2`
		})()
	])
};

export default PostCompoenet;