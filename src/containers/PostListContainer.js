import React from "react"
import { connect } from "react-redux"

import { PostListComponent } from "../component"

class PostListContainer extends React.Component {
	render () {
		const { id, blogTitle, blogDescription, postList } = this.props;

		return (<PostListComponent
					blogTitle={blogTitle}
					blogDescription={blogDescription}
					postList={postList.get(id)} />)
	}
}

const mapStateToProps = (state) => ({
	blogTitle		: state.HomeAction.blogTitle,
	blogDescription	: state.HomeAction.blogDescription,
	postList		: state.PostAction
});

const mapDispatchToProps = (dispatch) => ({

});

export default PostListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PostListContainer);