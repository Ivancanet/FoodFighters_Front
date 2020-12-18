import axios from 'axios';

class WineService {

    constructor() {
        let service = axios.create({
            baseURL: 'https://foodfighters-web.herokuapp.com/',
            withCredentials: true
        });


        this.service = service;

    }

   

    viewWines = () => {
        return this.service.get('/wines')
            .then(response => response.data)
    }

    createWine = (wine) =>{
        return this.service.post('/wines/create', wine)
        .then(response => response.data)
    }

    
}

export default WineService;
