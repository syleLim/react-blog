import React from "react"
import { ProfileStyle } from "../../styles"
import PropTypes from "prop-types";

const Profile = ({profile}) => {
	const { name, description } = profile;
	return (
		<ProfileStyle>
			<h1>{profile.get("name")}</h1>
			{profile.get("description")}
		</ProfileStyle>
	);
}

export default Profile;