import axios from 'axios';

class BlogService {

    constructor() {
        let service = axios.create({
            baseURL: 'https://foodfighters-web.herokuapp.com/',
            withCredentials: true
        });


        this.service = service;

    }


    renderBlog = () => {
        return this.service.get('/foodie')
            .then(response => response.data)
    };

    renderFormation = () =>{
        return this.service.get('/formation')
            .then(response => response.data)
    }

    renderExperiencie = () =>{
        return this.service.get('/experiencie')
            .then(response => response.data)
    }

 


    renderPost = (id) => {
        console.log(id)
        return this.service.post('/post', {id})
        .then(response => response.data)
    }
 
}

export default BlogService;
