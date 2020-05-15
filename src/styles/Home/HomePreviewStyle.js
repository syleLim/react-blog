import styles from "styled-components"

const HomePreviewStyle = styles.div`
	width				: 98%;
	height				: 76%;
	margin				: 1%;
	float				: left;
	background-color	: black;
	border-radius		: 0.5rem;
`

const Line = styles.div`
	float		: left;
	width 		: 100%;
	background 	: white;
	border		: 0.01rem solid white;
`

export { HomePreviewStyle, Line };