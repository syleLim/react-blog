import styles from "styled-components"

const HomePreviewBoxStyle = styles.div`
	width				: 91.5%;
	margin				: 2%;
	padding-left		: 4%;
	float				: left;
	background-color	: #F0FFFF;
	border				: 0.1rem solid black;
	border-radius		: 0.7rem;
`

const HomePreviewTitle = styles.h1`
	font-size	: 2rem;
	float		: left;
	margin		: 0rem;
	margin-top	: 0.5rem;
`;

const HomePreviewAuther = styles.p`
	text-align			: right;
	padding-right		: 1rem;
	margin-block-start	: 1.5rem;
	margin-block-end	: 0rem;
`

const HomePreviewDate = styles.p`
	text-align			: right;
	margin-block-start	: 0rem;
	margin-block-end	: 0rem;
	padding-right		: 1rem;
`;

const HomePreviewContent = styles.p`
	margin-block-start	: 0.5rem;
	padding-left		: 1rem;
	font-size			: 1rem;
`;





export { HomePreviewBoxStyle,
			HomePreviewAuther,
			HomePreviewContent,
			HomePreviewDate,
			HomePreviewTitle };