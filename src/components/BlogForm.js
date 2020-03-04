import React from 'react'

const BlogForm = ({ title, onTitleChange, author, onAuthorChange, onSubmit }) => {

    return (
        <form onSubmit={onSubmit}>
            <div> title:
                <input
                    type="text"
                    value={title}
                    onChange={(event) => onTitleChange(event)}>
                </input>
            </div>
            <div> author:
                <input
                    type="text"
                    value={author}
                    onChange={(event) => onAuthorChange(event)}>
                </input>
            </div>
            <button type="submit">create</button>
        </form>
    )
}

export default BlogForm