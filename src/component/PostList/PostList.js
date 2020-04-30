import React from "react"
import { PostListStyle } from "../../styles"
import ImmutablePropTypes from "react-immutable-proptypes"
import { Record, List } from "immutable"
import PropTypes from "prop-types"
import PostPreview from "./PostPreview"

const PostListComponent = ({postList}) => {
	const posts = postList.map(post => {
		return (
			<PostPreview post={post}/>
		)
	})
	
	return (
		<PostListStyle>
			{posts}
		</PostListStyle>
	)
}

PostListComponent.propTypes = {
	postList	: ImmutablePropTypes.listOf(
		ImmutablePropTypes.recordOf({
			id		: PropTypes.number,
			title	: PropTypes.string,
			date	: PropTypes.string,
			preview	: PropTypes.string,
			author	: PropTypes.string
		})
	)
};

PostListComponent.defaultProps = {
	postList : List([
		Record({
			id		: 0,
			title	: "post1",
			date	: "date1",
			preview	: "preview1",
			authoor	: "auther1"
		})(),
		Record({
			id		: 1,
			title	: "post2",
			date	: "date2",
			preview	: "preview2",
			authoor	: "auther2"
		})()
		
	])
};

export default PostListComponent;