import React from "react"
import { connect } from "react-redux"

import { PostListComponent } from "../component"

class PostListContainer extends React.Component {
	render () {
		const { id, postList } = this.props;

		return (<PostListComponent
					categoryId={id}
					postList={postList.get(id)} />)
	}
}

const mapStateToProps = (state) => ({	
	postList	: state.PostAction
});

const mapDispatchToProps = (dispatch) => ({

});

export default PostListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PostListContainer);