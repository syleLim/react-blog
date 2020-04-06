import React from 'react'
import styled, { css } from 'styled-components'
import { PageCss } from '../style/style.js'

const Page = ({children}) => {
    return (
        <PageCss>
            <h1>REACT BLOG</h1>
            <div>{children}</div>
        </PageCss>
    )
}

export default Page;