import React from "react"
import { ProfileStyle, User, Description } from "../../styles"
import { Record } from "immutable"

const Profile = ({profile}) => {
	const { name, description } = profile;

	return (
		<ProfileStyle>
			<User>{name}</User>
			<Description>{description}</Description>
		</ProfileStyle>
	);
}

export default Profile;