import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createBlog } from '../reducers/blogReducer'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const BlogForm = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const create = (event) => {
        event.preventDefault()
        const title = event.target.title.value
        const author = event.target.author.value
        const newBlog = {
            title,
            author,
            url: 'www.someurl.com',
            likes: 0,
            user: props.user._id,
            comments: []
        }
        props.createBlog(newBlog)
        event.target.title.value = ''
        event.target.author.value = ''
        handleClose()
    }

    return (
        <>
            <Button className="new-post-btn" variant="primary" onClick={handleShow}>
                New Post
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                </Modal.Body>
            </Modal>

        </>
    )
}
const mapDispatchToProps = {
    createBlog,
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const ConnectedBlogForm = connect(mapStateToProps, mapDispatchToProps)(BlogForm)
export default ConnectedBlogForm