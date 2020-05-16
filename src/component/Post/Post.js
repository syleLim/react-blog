import React				from "react"
import PropTypes			from "prop-types"
import ImmutablePropTyps	from "react-immutable-proptypes"
import { List, Record }		from "immutable"

import { PostStyle,
			PostTitle, 
			PostDate, 
			PostContent }	from "../../styles"
import { MarkDown } 		from "../../lib"


const PostCompoenet = ({post}) => {
	return (
		<PostStyle>
			<PostTitle>{post.title}</PostTitle>
			<PostDate>{post.date}</PostDate>
			<PostContent>
				<MarkDown content={post.content} />
			</PostContent>
		</PostStyle>
	)
}

PostCompoenet.propTypes = {
	post	: ImmutablePropTyps.recordOf({
				categoryId	: PropTypes.number,
				postId		: PropTypes.number,
				title		: PropTypes.string,
				author		: PropTypes.string,
				date		: PropTypes.string,
				content		: PropTypes.string
			})
};

PostCompoenet.defaultProps = {
	post 	: Record({
				categoryId	: 0,
				postId		: 0,
				title		: "postId 0",
				author		: "auther3",
				date		: "post 0 date",
				content		: `no data`
			})()
};

export default PostCompoenet;