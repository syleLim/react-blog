import React from "react"
import { connect } from "react-redux"
import { List, Record } from "immutable"

import { HomeComponent } from "../component"

class HomeContainter extends React.Component {
	getPreviewItem (postList, itemId) {
		let preview = [];

		itemId.forEach(id => {
			preview.push(postList.get(id.categoryId).get(id.postId));
		})
		return (List(preview));
	}

	render () {
		const {blogTitle, blogDescription, itemId, postList} = this.props;
		//console.log(postList.get(0).get(0).title)
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
	itemId			: state.HomeAction.itemId,
	postList		: state.PostAction
});

const mapDispatchToProps = (dispatch) => ({

});

export default HomeContainter = connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeContainter);