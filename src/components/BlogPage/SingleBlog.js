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
            .then(()=>{
                const modifyDate = this.state.post.date;
                console.log(modifyDate.getFullYear());
                //modifyDate(modifyDate.getFullYear(),modifyDate.getMonth() , modifyDate.getDate())
            })
            .catch((err) => {
                console.log(err);
            });

    }

    renderSinglePost = () => {
        return (
            <div>
            <br/>
            <h2>{this.state.post.title}</h2>
            <h3>{this.state.post.description}</h3>
            <p>{ReactHtmlParser(this.state.post.text)}</p>
            <p>Escrito por: <strong>{this.state.post.creator}</strong></p>
            <p>Fecha: {this.state.post.date}</p>
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
