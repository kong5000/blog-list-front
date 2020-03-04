import React from 'react'
import { connect } from 'react-redux'
import { createBlog } from '../reducers/blogReducer'

const BlogForm = (props) => {
    const title = props.title
    const onTitleChange = props.onTitleChange
    const author = props.author
    const onAuthorChange = props.onAuthorChange

    const create = (event) => {
        event.preventDefault()
        const newTitle = event.target.title.value
        const newAuthor = event.target.author.value
        const newBlog = {
            title: newTitle,
            author: newAuthor,
            url: 'www.someurl.com',
            likes: 0,
            user: 1
          }
          props.createBlog(newBlog)
    }

    return (
        <form onSubmit={create}>
            <div> title:
                <input
                    name="title"
                    type="text"
                    value={title}
                    onChange={(event) => onTitleChange(event)}>
                </input>
            </div>
            <div> author:
                <input
                    name="author"
                    type="text"
                    value={author}
                    onChange={(event) => onAuthorChange(event)}>
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