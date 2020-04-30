import React from "react"
import PropTypes from "prop-types"
import { HomeStyle } from "../../styles"
import { Map, List, fromJS } from "immutable"

const HomeComponent = ({description}) => {
	return (
		<HomeStyle>
			<h1>{description}</h1>
		</HomeStyle>
	)
}

HomeComponent.propTypes = {
    description	: PropTypes.string
};

HomeComponent.defaultProps = {
    description	: "Main description"
};

export default HomeComponent;