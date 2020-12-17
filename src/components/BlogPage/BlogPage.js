import React from 'react';
import { Link } from 'react-router-dom';
import BlogService from './BlogService';
import ReactHtmlParser from 'react-html-parser'


class BlogPage extends React.Component {
    state = {
        blog: []
    }

    service = new BlogService();


    componentDidMount() {

        this.service.renderBlog()
            .then((blogs) => {
                this.setState({ blog: blogs });
            })
            .catch((err) => {
                console.log(err);
            });

    }


    renderBlogs = () => {

        return this.state.blog.map((blogs) => {

            return this.state.blog.map((blogs) => {
                return (
                    <div className='wines'>
                        <div className='background'>
                            <div className="card" >
                                <img src={blogs.images} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 class="card-title">{blogs.title}</h5>
                                    <p class="card-text">{blogs.description}</p>
                                    <Link to={`/post/${blogs._id}`} class="btn btn-secondary">Ver Post</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })

        })
    }



    render() {
        return (
            <div>
                <h1>BlogPage Under Construction</h1>

                {this.state.blog.length > 0 && this.renderBlogs()}

            </div>
        );
    }
};

export default BlogPage;