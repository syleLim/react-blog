import React					from "react"
import { connect }				from "react-redux"
import { List, Map }			from "immutable"
import { bindActionCreators }	from "redux"

import { AppComponent } from "../component"
import * as DataAction from "../modules/DataAction"

class AppContainer extends React.Component {
	
	loadData () {
		this.props.DataAction.getData();
	}

	componentDidMount() {
		console.log("app mount")
		this.loadData();	
	}

	render () {
		console.log(this.props)
		return (
			<AppComponent />
		)
	}
}

const mapStateToProps = (state) => ({
	user			: state.DataAction.get("user"),
	userDescription	: state.DataAction.get("userDescription"),
	blogTitle		: state.DataAction.get("blogTitle"),
	blogDescription	: state.DataAction.get("blogDescription"),
	lastPosts		: state.DataAction.get("lastPosts"),
	POSTS			: state.DataAction.get("POSTS"),
	loading			: state.pender.pending['GET_DATA'],
	error			: state.pender.failure['GET_DATA']
})

const mapDispatchToProps = (dispatch) => ({
	DataAction	: bindActionCreators(DataAction, dispatch)
})

export default AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppContainer);