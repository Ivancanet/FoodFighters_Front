import axios from 'axios';

class BlogService {

    constructor() {
        let service = axios.create({
            baseURL: 'http://localhost:3000',
            withCredentials: true
        });


        this.service = service;

    }


    renderBlog = () => {
        return this.service.get('/foodie')
            .then(response => response.data)
    };

    renderPost = (id) => {
        console.log(id)
        return this.service.post('/post', {id})
        .then(response => response.data)
    }
 
}

export default BlogService;
