import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard=(props)=>{
    return(
        <div>
        
       
    <div className="card ms-3" >
<div className="card-body">
<h5 className="card-title">{props.title}</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<Link to={props.url} className="btn btn-primary">Read More</Link>
</div>
</div>
        
    </div>
    )
}

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-center'>Blog Pages</h1>
            <div className="d-flex mt-3">
<BlogCard url="/blogs/1" title="Blog 1" />
<BlogCard url="/blogs/2"  title="Blog 2"/>
</div>

        </div>
    )
}

export default Blogs
