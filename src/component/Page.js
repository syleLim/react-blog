import React from 'react'

const Page = ({children}) => {
    return (
        <div>
            <h1>REACT BLOG</h1>
            <div>{children}</div>
        </div>
    )
}

export default Page;