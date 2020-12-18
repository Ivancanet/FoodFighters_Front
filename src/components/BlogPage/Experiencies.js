import React from 'react';
import { Link } from 'react-router-dom';
import BlogService from './BlogService';



class Experiencies extends React.Component {
    state = {
        experiencies: []
    }

    service = new BlogService();


    componentDidMount() {

        this.service.renderExperiencie()
            .then((experiencies) => {
                this.setState({ experiencies: experiencies });
            })
            .catch((err) => {
                console.log(err);
            });

    }


    renderExperiencie = () => {



        return this.state.experiencies.map((experiencies) => {
            return (
                <div className='wines'>
                    <div className='background'>
                        <div className="card" >
                            <img src={experiencies.images} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 class="card-title">{experiencies.title}</h5>
                                <p class="card-text">{experiencies.description}</p>
                                <Link to={`/post/${experiencies._id}`} class="btn btn-secondary">Ver Post</Link>
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
                <h2>Experiencias</h2>

                {this.state.experiencies.length > 0 && this.renderExperiencie()}

            </div>
        );
    }
};

export default Experiencies;