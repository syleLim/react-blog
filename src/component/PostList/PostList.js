import React from "react"
import { PostListStyle } from "../../styles"
import ImmutablePropTypes from "react-immutable-proptypes"
import { Record, List } from "immutable"
import PropTypes from "prop-types"
import PostPreview from "./PostPreview"

const PostListComponent = ({categoryId, postList}) => {
	const posts = postList.map((post, id) => 
		( <PostPreview
			categoryId={categoryId}
			postId={id}
			post={post}/> ))
	
	return (
		<PostListStyle>
			{posts}
		</PostListStyle>
	)
}

PostListComponent.propTypes = {
	categoryId	: PropTypes.number,
	postList	: ImmutablePropTypes.listOf(
		ImmutablePropTypes.recordOf({
			title		: PropTypes.string,
			author		: PropTypes.string,
			date		: PropTypes.string,
			content		: PropTypes.string
		})
	)
};

PostListComponent.defaultProps = {
	categoryId	: 0,
	postList 	: List([
		Record({
			title		: "post1",
			date		: "date1",
			content		: "preview1",
			author		: "auther1"
		})(),
		Record({
			title		: "post2",
			date		: "date2",
			content		: "preview2",
			author		: "auther2"
		})(),
		Record({
			title		: "post3",
			date		: "date3",
			content		: "preview3",
			author		: "auther3"
		})()
	])
};

export default PostListComponent;