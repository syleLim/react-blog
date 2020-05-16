import styles from "styled-components"

const HeaderStyle = styles.div`
	float				: left;
	width				: 100%;
	height				: 10rem;
	background-color	: #F4A460;
	text-align			: center;
`

const BlogTitle = styles.h1`
	margin-block-start		: 1rem;
	margin-block-end		: 0.3rem;
	font-size				: 3rem;
`
const BlogDescription = styles.p`
	
`;


export { HeaderStyle, BlogTitle, BlogDescription };