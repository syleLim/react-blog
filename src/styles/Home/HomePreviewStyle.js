import styles from "styled-components"

const HomePreviewStyle = styles.div`
	width				: calc(98% - 1.2rem);
	height				: calc(100% - 12.2rem);
	margin				: 1rem;;
	float				: left;
	background-color	: white;
	border				: 0.1rem dashed black;
	border-radius		: 0.5rem;

`

const Line = styles.div`
	float		: left;
	width 		: 100%;
	background 	: black;
	border		: 0.01rem solid black;
`

export { HomePreviewStyle, Line };