import React from "react"
import { connect } from "react-redux"

import { PostComponent } from "../component"

class PostContainer extends React.Component {
	render () {
		const { categoryId, postId, postList } = this.props;
		
		return (<PostComponent
					post={postList.get(categoryId).get(postId)}
				/>)
	}
}

const mapStateToProps = (state) => ({
	postList	: state.PostAction
});

const mapDispatchToProps = (dispatch) => ({

});

export default PostContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PostContainer);