
import React from 'react';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";





class CreatePost extends React.Component{
    videoHandler = () => {
        this.inputOpenVideoRef.current.click();
    };
    
    modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'align': [] }],
          ['link', 'image', 'video'],
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

    render() {
        return (
            <div>
                <h1>CreatePost Under Construction</h1>
                <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h2 > Editor</h2>
                    </div>
                    <form>
                        <ReactQuill
                        ref={(el) => { this.reactQuillRef = el }}
                        theme='snow'
                        modules={this.modules}
                        formats={this.formats}
                        
                        placeholder='Empieza a redactar el post...'

                        />
                    </form>

                    <form >
                        <div style={{ textAlign: 'center', margin: '2rem', }}>
                            <button
                                size="large"
                                htmlType="submit"
                                className=""

                            >
                                Submit
                </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
};

export default CreatePost;