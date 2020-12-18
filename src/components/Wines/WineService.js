import axios from 'axios';

class WineService {

    constructor() {
        let service = axios.create({
            baseURL: 'http://localhost:3000',
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
