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

export { inlineCodeBlock, codeBlock };