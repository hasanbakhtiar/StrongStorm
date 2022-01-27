import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import AppRouter from './routers/AppRouter';
import configuraStore from './store/configuraStore';
import { addBlog,editBlog,removeBlog } from './action/blogs';
import { Provider } from 'react-redux';


const store  = configuraStore();
  
  store.subscribe(()=>{
  console.log(store.getState());
})
 store.dispatch(addBlog({title:'b1', description:"desc1"}));
 const blog1 = store.dispatch(addBlog({title:'b2', description:"desc2"}));
//  store.dispatch(removeBlog({id:blog1.blog.id}));

store.dispatch(editBlog(blog1.blog.id,{title:"update"}))

const App =()=>{
  return(
    <div className='container'>
<Provider store={store}>
<AppRouter/>
</Provider>

    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));