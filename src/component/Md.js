import React from 'react'
import ReactMarkDown from 'react-markdown'

const md = `
# title
\`\`\`
code block
\`\`\`
`

const codeBlock = (props) => (
    <pre style={{background : '#000', color: '#fff', padding: 10}}>
        <code>
            {props.value}
        </code>
    </pre>
)

const Md = () => (
    <ReactMarkDown source={md} renderers={{code: codeBlock}}/>
)

export default Md;