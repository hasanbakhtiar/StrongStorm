import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import {v4 as uuid} from 'uuid';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import AppRouter from './routers/AppRouter';

const blogState = [];

const addBlog =(title="", description="", dateAdded =0)=>({
  type: "ADD_BLOG",
  blog:{
    id: uuid(),
    title:title,
    description:description,
    dateAdded: dateAdded
  }
})

const removeBlog =({id})=>({
  type: "REMOVE_BLOG",
  id:id
})

const blogReducer = (state=blogState, action)=>{
  switch (action.type) {
    case "ADD_BLOG":
      return[...state,
      action.blog]
  case "REMOVE_BLOG":
    return state.filter(({id})=>{
      return id !== action.id
    })
    case "EDIT_BLOG":
      return
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    blog:blogReducer,
  })
)

store.subscribe(()=>{
  console.log(store.getState());
})
 store.dispatch(addBlog({title:'b1', description:"desc1"}));
 const blog1 = store.dispatch(addBlog({title:'b2', description:"desc2"}));
 store.dispatch(removeBlog({id:blog1.blog.id}));
const App =()=>{
  return(
    <div className='container'><AppRouter/></div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));