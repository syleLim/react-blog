import React from "react"
import { HeaderStyle, BlogTitle, BlogDescription } from "../../styles"

const Header = ({blogTitle, blogDescription}) => (
	<HeaderStyle>
		<BlogTitle>{blogTitle}</BlogTitle>
		<BlogDescription>{blogDescription}</BlogDescription>
	</HeaderStyle>
)

export default Header;