import React from 'react'
import ReactMarkDown from 'react-markdown'
import {codeBlock, TabelCellBlock, QuoteBlock} from '../style/mdStyle.js'

const Md = (props) => (
    <ReactMarkDown source={props.source}
                    skipHtml={false}
                    escapeHtml={false}
                    renderers={{
                        code: codeBlock,
                        tableCell: TabelCellBlock,
                        blockquote: QuoteBlock
                    }}/>
)

export default Md;