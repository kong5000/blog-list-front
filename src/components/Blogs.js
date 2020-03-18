import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { updateBlog } from '../reducers/blogReducer'

const Blogs = (props => {
    const styleRow = (index) => {
        return (index % 2 === 0 ? 'row-light' : 'row-dark');
    }
    const styleContent = (index) => {
        return (index % 2 === 0 ? 'content-dark' : 'content-light');
    }
    const upVote = (id) => {
        return( () => {
            const votedBlog = props.blogs.find(blog => blog._id === id)
            const updatedBlog = {...votedBlog, likes: votedBlog.likes + 1};
            props.updateBlog(updatedBlog)
        })
    }
    const downVote = (id) => {
        return( () => {
            const votedBlog = props.blogs.find(blog => blog._id === id)
            const updatedBlog = {...votedBlog, likes: votedBlog.likes - 1};
            props.updateBlog(updatedBlog)
        })
    }

    const sortBlogs = (blogs) => {
        return(blogs.sort(function(a, b){
            if(a.likes > b.likes){
                return -1;
            } else if(a.likes < b.likes){
                return 1;
            }
            return 0;
        }))
    }

    return (
        <div class="blog-page">
            <div class="blog-page-header">
                <h1 class="blog-page-header-text">PostAp</h1>
                <Button className="new-post-btn">New Post</Button>
            </div>
            <Table striped>
                <tbody>
                    {sortBlogs(props.blogs).map((blog, index) =>
                        <tr key={blog._id} id={styleRow(index)}>
                            <td>
                                <button onClick={downVote(blog._id)}>
                                    <i class="fas fa-arrow-down"></i>
                                </button>
                                <button onClick={upVote(blog._id)}>
                                    <i class="fas fa-arrow-up"></i>
                                </button>
                                <div class="post-likes">Votes: {blog.likes}</div>
                                <Link to={`/blogs/${blog._id}`} id={styleContent(index)}>{blog.title}</Link>
                                <div>{blog.date}</div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
})

const mapDispatchToProps = {
    updateBlog,
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    }
}

const ConnectedBlogs = connect(mapStateToProps, mapDispatchToProps)(Blogs)
export default ConnectedBlogs