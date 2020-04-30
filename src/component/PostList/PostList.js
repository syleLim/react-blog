import React from "react"
import { PostListStyle } from "../../styles"
import ImmutablePropTypes from "react-immutable-proptypes"
import { Record, List } from "immutable"
import PropTypes from "prop-types"
import PostPreview from "./PostPreview"

const PostListComponent = ({postList, id}) => {
	const posts = postList.map(post => {
		if (post.categoryId === id)
			return ( <PostPreview post={post}/> )
	})
	
	return (
		<PostListStyle>
			{posts}
		</PostListStyle>
	)
}

PostListComponent.propTypes = {
	id			: PropTypes.number,
	postList	: ImmutablePropTypes.listOf(
		ImmutablePropTypes.recordOf({
			categoryId	: PropTypes.number,
			postId		: PropTypes.number,
			title		: PropTypes.string,
			date		: PropTypes.string,
			preview		: PropTypes.string,
			author		: PropTypes.string
		})
	)
};

PostListComponent.defaultProps = {
	id			: 0,
	postList 	: List([
		Record({
			categoryId	: 0,
			postId		: 0,
			title		: "post1",
			date		: "date1",
			preview		: "preview1",
			authoor		: "auther1"
		})(),
		Record({
			category_id	: 0,
			postId		: 1,
			title		: "post2",
			date		: "date2",
			preview		: "preview2",
			authoor		: "auther2"
		})()
	])
};

export default PostListComponent;