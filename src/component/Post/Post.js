import React				from "react"
import PropTypes			from "prop-types"
import ImmutablePropTyps	from "react-immutable-proptypes"
import { List, Record }		from "immutable"

import { PostStyle,
			PostTitle, 
			PostDate, 
			PostContent,
			PostAuthor,
			Line }		from "../../styles"
import { PostMarkDown }	from "../../lib"


const PostCompoenet = ({post}) => {
	const { title, author, date, content } = post;
	return (
		<PostStyle>
			<PostTitle>{title}</PostTitle>
			<PostAuthor>{author}</PostAuthor>
			<PostDate>{date}</PostDate>
			<PostContent>
				<PostMarkDown content={content} />
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