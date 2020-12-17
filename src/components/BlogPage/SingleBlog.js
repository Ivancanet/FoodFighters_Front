import React from 'react'

import { Link } from 'react-router-dom';

import BlogService from './BlogService'

import ReactHtmlParser from 'react-html-parser'

class IndividualBlog extends React.Component {

    state = {
        post: {}
    }

    service = new BlogService();



    componentDidMount() {
        const id = this.props.match.params.id;
        this.service.renderPost(id)
            .then((post) => {
                this.setState({ post: post });

            })
            .catch((err) => {
                console.log(err);
            });

    }

    renderSinglePost = () => {
        return (
            <div>
            <h2>{this.state.post.title}</h2>
            <h3>{this.state.post.description}</h3>
            <img src={this.state.post.images} alt='Imagen'></img><br/>
            <p>{ReactHtmlParser(this.state.post.text)}</p>
            <p>{this.state.post.date}</p>
            <p>{this.state.post.creator}</p>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderSinglePost()}
            </div>
        )
    }
}

export default IndividualBlog;
