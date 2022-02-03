import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configuraStore';
import {addBlog,removeBlog,editBlog} from './actions/blogs';


const store  =  configureStore();


store.subscribe(()=>{
    console.log(store.getState());
});


const blog1 = store.dispatch(addBlog({title:"b1",description:"desc1"}));





// store.dispatch(removeBlog({id: blog1.blog.id}))








const App = ()=>{
    return(
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));

