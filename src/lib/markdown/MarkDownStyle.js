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

const previewHeader = (props) => {
	console.log(props.children[0].props.value);
	return (
		<p style={{
				"font-size"				: "0.8rem",
				"margin-block-start"	: "0.1rem",
				"margin-block-end"		: "0.1rem",
			}}>
			{props.children[0].props.value}
		</p>
	)
}

export { inlineCodeBlock, codeBlock, previewHeader };