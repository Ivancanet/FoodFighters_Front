import React from 'react';
import { Link } from 'react-router-dom';
import BlogService from './BlogService';



class Formations extends React.Component {
    state = {
        formations: []
    }

    service = new BlogService();


    componentDidMount() {

        this.service.renderFormation()
            .then((formations) => {
                this.setState({ formations: formations });
            })
            .catch((err) => {
                console.log(err);
            });

    }


    renderFormations = () => {

       

            return this.state.formations.map((formations) => {
                return (
                    <div className='wines'>
                        <div className='background'>
                            <div className="card" >
                                <img src={formations.images} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 class="card-title">{formations.title}</h5>
                                    <p class="card-text">{formations.description}</p>
                                    <Link to={`/post/${formations._id}`} class="btn btn-secondary">Ver Post</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })

        
    }



    render() {
        return (
            <div>
                <h2>Formaciones</h2>

                {this.state.formations.length > 0 && this.renderFormations()}

            </div>
        );
    }
};

export default Formations;