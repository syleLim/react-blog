import React from "react"
import { ProfileStyle } from "../../styles"
import { Record } from "immutable"
import PropTypes from "prop-types";

const Profile = ({profile}) => {
	const { name, description } = profile;

	return (
		<ProfileStyle>
			<h1>{name}</h1>
			{description}
		</ProfileStyle>
	);
}

export default Profile;