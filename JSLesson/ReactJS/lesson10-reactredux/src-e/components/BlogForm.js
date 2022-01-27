import React, { Component } from 'react';

export class BlogForm extends Component {
    constructor(props){
        super(props);
        this.state={
            title: 'blog',
            description: "desc",
            error:""
        }
    }
  render() {
    return <div>
        <form>
            <div className='mt-3'>
                <input type="text" placeholder='add blog title'/>
            </div>
            <div className='mt-3'>
                <textarea name="" id="" cols="30" rows="10" placeholder='add blog description'></textarea>
            </div>
            <div>
                <button type='submit' className='btn btn-primary'>Save Changes</button>
            </div>
        </form>
    </div>;
  }
}

export default BlogForm;
