import styles from "styled-components"

const CategoryStyle = styles.div`
	width			: 15rem;
	float			: right;
	background		: white;
	box-shadow		: 0 0 10px grey;
	min-height		: 50rem;
	padding-bottom	: 5rem;
	
	@media only screen and (max-width: 768px) {
		display			: none;
	}
`;

export default CategoryStyle;