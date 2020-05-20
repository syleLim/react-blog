import React from "react"
import { connect } from "react-redux"
import { List, Record } from "immutable"
import { bindActionCreators } from "redux"

import { HomeComponent } from "../component"

class HomeContainter extends React.Component {

	getPreviewItem (postList, itemId) {
		
	}

	render () {
		const {blogTitle, blogDescription, itemId, postList} = this.props;

		return (<HomeComponent 
					blogTitle={blogTitle}
					blogDescription={blogDescription}
					previewItems={this.getPreviewItem(postList, itemId)}
				/>)
	}
}

const mapStateToProps = (state) => ({
	blogTitle		: state.DataAction.get("blogTitle"),
	blogDescription	: state.DataAction.get("blogDescription"),
});

const mapDispatchToProps = (dispatch) => ({
	
});

export default HomeContainter = connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeContainter);