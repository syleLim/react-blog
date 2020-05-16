import styles from "styled-components"
import { NavLink } from "react-router-dom";

const PreviewBoxStyle = styles.div`
	width				: calc(100% - 3.25rem);
	height				: 15rem;
	margin				: 1rem;
	padding-left		: 1rem;
	float				: left;
	background-color	: #F0FFFF;
	border				: 0.1rem dashed grey;
	border-radius		: 0.7rem;
`

const PreviewTitle = styles.h1`
	font-size	: 2rem;
	float		: left;
	margin		: 0rem;
	margin-top	: 0.5rem;
`;

const PreviewAuther = styles.p`
	text-align			: right;
	padding-right		: 1rem;
	margin-block-start	: 1.5rem;
	margin-block-end	: 0rem;
`

const PreviewDate = styles.p`
	text-align			: right;
	margin-block-start	: 0rem;
	margin-block-end	: 0rem;
	padding-right		: 1rem;
`;

const PreviewContent = styles.p`
	margin-block-start	: 0.5rem;
	padding-left		: 1rem;
	font-size			: 1rem;
`;

const StyleLink = styles(NavLink)`
	text-decoration		: none;
	&:focus, &:hover, &:visited, &:link, &:active {
		text-decoration: none;
		color			: black;
    }
`

export { PreviewBoxStyle, PreviewTitle, PreviewAuther, PreviewDate, PreviewContent, StyleLink };