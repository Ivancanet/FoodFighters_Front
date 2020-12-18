import axios from 'axios';

class PostService {

    constructor() {
        let service = axios.create({
            baseURL: 'https://foodfighters-web.herokuapp.com',
            withCredentials: true
        });


        this.service = service;

    }




    createPost = (post) => {
        return this.service.post('/post/create', post)
            .then(response => response.data)
    };

 
}

export default PostService;
