import React from "react"
import { connect } from "react-redux"
import { List, Record } from "immutable"
import { bindActionCreators } from "redux"

import AppComponent from "../component/App"

class AppContainer extends React.Component {
	loadData () {

	}

	componentDidMount() {
		this.loadData();
	}

	render () {
		<AppComponent />
	}
}

const mapStateToProps = {

}

const mapDispatchToProps = {
	
}

export default AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppContainer);