import React from "react"
import { connect } from "react-redux"

import { CategoryComponent } from "../component"

class CategoryContainter extends React.Component {
	render () {
		return (<CategoryComponent 
					profile={this.props.profile}
					categoryGroup={this.props.categoryGroup}
				/>)
	}
}

const mapStateToProps = (state) => ({
	profile			: state.CategoryAction.profile,
	categoryGroup	: state.CategoryAction.categoryGroup
});

const mapDispatchToProps = (dispatch) => ({

});

export default CategoryContainter = connect(
	mapStateToProps,
	mapDispatchToProps
)(CategoryContainter);