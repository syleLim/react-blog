import React from "react"
import { connect } from "react-redux"

import { CategoryComponent } from "../component"

class CategoryContainter extends React.Component {
	
	render () {
		console.log(this.props)
		return (<CategoryComponent 
					profile={this.props.profile}
					categoryGroup={this.props.categoryGroup}
				/>)
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return ({
	profile			: state.profile,
	categoryGroup	: state.categoryGroup
})};

const mapDispatchToProps = (dispatch) => ({

});

export default CategoryContainter = connect(
	mapStateToProps,
	mapDispatchToProps
)(CategoryContainter);