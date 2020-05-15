import React from "react"
import { PostListStyle } from "../../styles"
import ImmutablePropTypes from "react-immutable-proptypes"
import { Record, List } from "immutable"
import PropTypes from "prop-types"
import PostPreview from "./PostPreview"

const PostListComponent = ({categoryId, postList}) => {
	const posts = postList.map((post, id) => 
		( <PostPreview
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
			categoryId	: PropTypes.number,
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
			categoryId	: 0,
			categoryId	: 1,
			title		: "post1",
			date		: "date1",
			content		: "preview1",
			author		: "auther1"
		})(),
		Record({
			categoryId	: 0,
			categoryId	: 2,
			title		: "post2",
			date		: "date2",
			content		: "preview2",
			author		: "auther2"
		})(),
		Record({
			categoryId	: 0,
			categoryId	: 3,
			title		: "post3",
			date		: "date3",
			content		: "preview3",
			author		: "auther3"
		})()
	])
};

export default PostListComponent;