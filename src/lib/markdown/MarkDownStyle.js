import React from "react"

const inlineCodeBlock = (props) => {
	console.log(props);
	return (
	<span style={{background : "#f0f0f0"}}>
		{props.value}
	</span>
	)
}

const codeBlock = (props) => {
	console.log(props);
	return (
	<pre style={{
					background		: "#5f5f5f",
					borderRadius	: 10,
					paddingLeft		: 10,
					margin			: 5
				}}>
		{props.value}
	</pre>
	);
}

export { inlineCodeBlock, codeBlock };