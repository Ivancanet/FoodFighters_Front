import React from 'react';
import { Link } from 'react-router-dom';
import BlogService from './BlogService';



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

    renderSpinner = () => {
        return (
            <div>
                <img src='https://media.tenor.com/images/acacf325add2deb882ed5d91441a8ad7/tenor.gif' alt='Loading' />
                <br/>
                <div class="spinner-border text-danger" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        )

    }



    render() {
        return (
            <div>
                <h2>Publicaciones</h2>
                <br/>
                {this.state.blog.length === 0 ? this.renderSpinner() : this.renderBlogs() }

            </div>
        );
    }
};

export default BlogPage;