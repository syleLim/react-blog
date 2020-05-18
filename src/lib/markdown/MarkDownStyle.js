import React from "react"

const inlineCodeBlock = (props) => {
	return (
		<span style={{background : "#f0f0f0"}}>
			{props.value}
		</span>
	)
}

const codeBlock = (props) => {
	return (
		<pre style={{
					background		: "#5f5f5f",
					borderRadius	: 10,
					padding			: 10,
					margin			: 10,
				}}>
			{props.value}
		</pre>
	);
}

const previewInlineCodeBlock = (props) => {
	return (
		<span style={{background 	: "#e0e0e0",
						color 		: "gray",
						fontSize	: "0.8rem"}}>
			{props.value}
		</span>
	)
}

const previewCodeBlock = (props) => {
	return (
		<pre style={{
					color			: "gray",
					background		: "#e0e0e0",
					borderRadius	: 3,
					padding			: "0.1rem",
					paddingLeft		: "1rem",
					paddingRight	: "1rem",
					fontSize		: "0.8rem",
					margin			: 0,
				}}>
			{props.value}
		</pre>
	);
}

const previewText = (props) => {
	return (
		<p style={{
			fontSize	: "0.8rem",
			margin		: 0,
			padding		: 0,
			color		: "gray"
		}}>
			{props.value}
		</p>
	)
}

const previewHeader = (props) => {
	return (
		<p style={{
			fontSize	: "0.8rem",
			margin		: "0.1rem",
			padding		: 0,
			color		: "gray"
		}} >
			{props.children[0].props.value}
		</p>
	)
}

export { inlineCodeBlock, codeBlock, previewText, previewCodeBlock, previewInlineCodeBlock, previewHeader};