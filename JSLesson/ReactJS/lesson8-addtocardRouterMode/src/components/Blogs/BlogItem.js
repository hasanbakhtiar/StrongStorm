import React from 'react'

const BlogItem = ({match}) => {
    return (
        <h1 className='text-center '>
            BlogPage: {match.params.id}
        </h1>
    )
}

export default BlogItem
