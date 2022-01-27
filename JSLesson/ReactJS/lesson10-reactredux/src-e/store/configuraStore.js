import { combineReducers, createStore } from 'redux';
import blogReducer from '../reducers/blogs';


// Store Start
export default ()=>{
    const store = createStore(
        combineReducers({
          blog:blogReducer,
        })
        )
        return store;
}
// Store End
