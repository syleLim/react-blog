import styles from "styled-components"

const PostListStyle = styles.div`
	float		: left;
	width		: calc(100% - 15rem);
	height		: 100%;
	background	: #F7F7F7;	

	@media only screen and (max-width: 768px) {
		width			: 100%;
	}
`;

export default PostListStyle;