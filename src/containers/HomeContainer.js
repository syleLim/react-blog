import React from "react"
import { connect } from "react-redux"
import { List, Record } from "immutable"
import { bindActionCreators } from "redux"

import { HomeComponent } from "../component"
import * as HomeAction from "../modules/HomeAction"

class HomeContainter extends React.Component {
	loadData () {
		const { HomeAction } = this.props;
		HomeAction.getTest();
	}

	componentDidMount () {
		this.loadData();
	}

	getPreviewItem (postList, itemId) {
		previewItem
	}

	render () {
		const {blogTitle, blogDescription, itemId, postList} = this.props;
		console.log(blogTitle);
		return (<HomeComponent 
					blogTitle={blogTitle}
					blogDescription={blogDescription}
					previewItems={this.getPreviewItem(postList, itemId)}
				/>)
	}
}

const mapStateToProps = (state) => ({
	blogTitle		: state.HomeAction.blogTitle,
	blogDescription	: state.HomeAction.blogDescription,
	lastPosts		: state.HomeAction.lastPosts,
	postList		: state.PostAction
});

const mapDispatchToProps = (dispatch) => ({
	HomeAction : bindActionCreators(HomeAction, dispatch)
});

export default HomeContainter = connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeContainter);