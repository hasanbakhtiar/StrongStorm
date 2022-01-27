import {v4 as uuid} from 'uuid';

// Action Start

export const addBlog =(title="", description="", dateAdded =0)=>({
    type: "ADD_BLOG",
    blog:{
      id: uuid(),
      title:title,
      description:description,
      dateAdded: dateAdded
    }
  })
  
export const editBlog = (id,updates)=>({
    type:"EDIT_BLOG",
    id,
    updates
})

 export const removeBlog =({id})=>({
    type: "REMOVE_BLOG",
    id:id
  })
  // Action End
  