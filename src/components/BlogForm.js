import React from 'react'
import { connect } from 'react-redux'
import { createBlog } from '../reducers/blogReducer'

const BlogForm = (props) => {
    const create = (event) => {
        event.preventDefault()
        const title = event.target.title.value
        const author = event.target.author.value
        const newBlog = {
            title,
            author,
            url: 'www.someurl.com',
            likes: 0,
            user: 1
        }
        props.createBlog(newBlog)
        event.target.title.value = ''
        event.target.author.value = ''
    }

    return (
        <form onSubmit={create}>
            <div> title:
                <input
                    name="title"
                    type="text"
                >
                </input>
            </div>
            <div> author:
                <input
                    name="author"
                    type="text"
                >
                </input>
            </div>
            <button type="submit">create</button>
        </form>
    )
}
const mapDispatchToProps = {
    createBlog
}
const ConnectedBlogForm = connect(null, mapDispatchToProps)(BlogForm)
export default ConnectedBlogForm