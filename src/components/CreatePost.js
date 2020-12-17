
import React from 'react';
import ReactQuill, {Quill} from 'react-quill';
import "react-quill/dist/quill.snow.css";
import PostService from './PostService';
import { parse } from 'node-html-parser';
import toHtml from 'string-to-html';
import ReactHtmlParser from 'react-html-parser'
import { ImageDrop } from 'quill-image-drop-module';


Quill.register('modules/imageDrop', ImageDrop);



class CreatePost extends React.Component {
    videoHandler = () => {
        this.inputOpenVideoRef.current.click();
    };

    state = {
        post: {
            title: '',
            description: '',
            images: '',
            text: '<h2> Hola <h2>',
            date: '',
            creator: 'Ice',
            type: ''
        }
    }

    postService = new PostService();

    editor = new Quill('.editor');



    modules = {
        imageDrop:true,
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['link','video'],
            ['clean']
        ],
    }

    formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'color', 'background',
        'align',
        'link', 'image', 'video'
    ]

     
    changePost = (value) => {
        this.setState({ post: { ...this.state.post, text: value } });
    };

    onSubmit = (event) => {
        event.preventDefault();
        console.log('hola');

        const post = this.state.post;
        console.log(post);
        this.postService.createPost(post)
        .then((result)=>{
            console.log(result);
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    changeHandler = (_eventTarget, editor) => {
        
        this.setState({ post: { ...this.state.post, [_eventTarget.name]: _eventTarget.value } });
    };

    newString = () =>{
        return parse('<h2>hola</h2>');
    }

    render() {
        return (
            <div>
            <p>{ReactHtmlParser(this.state.post.text)}</p>
                <h1>CreatePost Under Construction</h1>
                <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
                    <div style={{ textAlign: 'center' }}>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group row">
                            <label htmlFor="title" className="col-sm-2 col-form-label">Titulo</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" placeholder='Rompiendo las normas' name='title' id="title"
                                    onChange={(event) => {
                                        this.changeHandler(event.target)
                                    }} />

                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="description" className="col-sm-2 col-form-label">Descripción</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" placeholder='Pequeña cena en un hermoso local de bcn...' name='description' id="description"

                                    onChange={(event) => {
                                        this.changeHandler(event.target)
                                    }} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="images" className="col-sm-2 col-form-label">Imagen</label>
                            <div className="col-sm-8">
                                <textarea type="text" className="form-control" placeholder='Url imagen titular' name='images' id="images"
                                    onChange={(event) => {
                                        this.changeHandler(event.target)
                                    }} />
                            </div>
                        </div>





                        <ReactQuill
                            ref={(el) => { this.reactQuillRef = el }}
                            theme='snow'
                            modules={this.modules}
                            formats={this.formats}
                            value={this.state.post.text}
                            onChange={(e) => this.changePost(e)}
                            placeholder='Empieza a redactar el post...'

                        />

                        <br />
                        <div className="form-group row">
                            <label htmlFor="date" className="col-sm-2 col-form-label">Fecha</label>
                            <div className="col-sm-8">
                                <input type="date" className="form-control" name='date' id="date"

                                    onChange={(event) => {
                                        this.changeHandler(event.target)
                                    }} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="type" className="col-sm-2 col-form-label">Tipo</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" placeholder='foodie, experiencie or formation' name='type' id="type"

                                    onChange={(event) => {
                                        this.changeHandler(event.target)
                                    }} />
                            </div>
                        </div>


                        <div className="form-group row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Creador</label>
                            <div className="col-sm-8">
                                <input type="text" readonly className="form-control-plaintext" id="staticEmail" value={this.props.userLogged.username} />
                            </div>
                        </div>

                        <div style={{ textAlign: 'center', margin: '2rem', }}>
                            <button type='submit'>Create Post</button>
                        </div>
                    </form>
                </div>





            </div>

        );
    };
};

export default CreatePost;