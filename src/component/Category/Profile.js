import React from "react"
import { ProfileStyle } from "../../styles"
import PropTypes from "prop-types";

const Profile = ({name, description}) => (
	<ProfileStyle>
		<h1>{name}</h1>
		{description}
	</ProfileStyle>
)

export default Profile;