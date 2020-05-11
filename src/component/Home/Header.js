import React from "react"
import { HeaderStyle } from "../../styles"

const Header = ({blogTitle, blogDescription}) => (
	<HeaderStyle>
		<h1>{blogTitle}</h1>
		<p>{blogDescription}</p>
	</HeaderStyle>
)

export default Header;