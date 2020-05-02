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
			postId		: PropTypes.number,
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
			postId		: 0,
			title		: "post1",
			date		: "date1",
			content		: "preview1",
			authoor		: "auther1"
		})(),
		Record({
			postId		: 1,
			title		: "post2",
			date		: "date2",
			content		: "preview2",
			authoor		: "auther2"
		})(),
		Record({
			postId		: 2,
			title		: "post3",
			date		: "date3",
			content		: "preview3",
			authoor		: "auther3"
		})()
	])
};

export default PostListComponent;