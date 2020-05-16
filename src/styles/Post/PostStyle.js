import styles from "styled-components"

const PostStyle = styles.div`
	float		: left;
	width		: calc(100% - 16rem);
	height		: 100%;
	background	: #ffffff;
`;

const PostTitle = styles.h1`
	font-size			: 4rem;
	margin				: 2rem;
	margin-block-start	: 1rem;
	margin-block-end	: 1rem;
	text-align			: center;
`

const PostDate = styles.p`
	font-size			: 1rem;
	margin-right		: 2rem;
	margin-block-start	: 0.5rem;
	margin-block-end	: 0.5rem;
	color				: #5D6D7E;
	text-align			: right;
`;

const PostContent = styles.div`
	padding			: 2rem;
	height			: calc(100% - 12.23rem);
	background		: #AED6F1;
`;

export { PostStyle, PostTitle, PostDate, PostContent };