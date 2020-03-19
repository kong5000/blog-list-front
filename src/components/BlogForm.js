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
        const author = event.target.content.value
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
        event.target.content.value = ''
        handleClose()
    }

    return (
        <>
            <Button className="new-post-btn" variant="primary" onClick={handleShow}>
                New Post
            </Button>
            <Modal className="modal" show={show} onHide={handleClose}>
                <div className="modal-header">
                    <h2 className="modal-title">New Post</h2>
                </div>
                <Modal.Body className="modal-body">
                    <form onSubmit={create}>
                        <div className="modal-text">Title</div>
                        <div className="modal-div">
                            <input name="title" type="text"></input>
                        </div>
                        <div className="modal-text">Content</div>
                        <div className="modal-div">
                            <textarea name="content"></textarea>
                        </div>
                        <Button className="submit-post-btn"type="submit">create</Button>
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