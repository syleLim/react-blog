import React from 'react'

const codeBlock = (props) => (
    <pre style={{background : '#000', color: '#fff', padding: 10}}>
        <code>
            {props.value}
        </code>
    </pre>
);

const TabelCellBlock = (props) => {
    let style = {
        textAlign: 'center',
        padding: 5
    };

    if (props.isHeader) {
        style.background = '#ff0';
        style.border = '1px solid #ccc';
        style.borderLeft = 0;
        style.borderRight = 0;
    } else {
        style.borderBottom = '1px solid #eee';
    }

    return (
        <td style={style}>
            {props.children}
        </td>
    )
};

const QuoteBlock = (props) => (
    <div style={{
        border: '1px dashed #aaa',
        borderRadius: 10,
        paddingLeft: 10,
        margin: 5
        }}>
        {props.children}
    </div>
);

export {TabelCellBlock, codeBlock, QuoteBlock};