import blogService from '../services/blogs'

/* Action creator, async GET is possible due to thunk middleware
*/

export const initializeBlogs = () => {
    return async dispatch => {
        const blogs = await blogService.getAll()
        dispatch({
            type: 'INIT_BLOGS',
            data: blogs
        })
    }
}

export const createBlog = (blog) => {
    return async dispatch => {
        const postedBlog = await blogService.createBlog(blog)
        dispatch({
            type: "CREATE_BLOG",
            blog: postedBlog
        })
    }
}

const blogReducer  = (state=[], action) => {
    switch(action.type){
        case 'INIT_BLOGS':
            return action.data
        case 'CREATE_BLOG':
            return state.concat(action.blog)
        default:
    }
    return state
}

export default blogReducer