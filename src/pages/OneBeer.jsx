import React, { Component } from 'react';
import beersAPI from "../api/beersApi";
import Header from "../components/Header";
import "../styles/one-beer.css";

class OneBeer extends Component {

    state = {
        beer: null,
    };

    componentDidMount() {
        beersAPI
            .getOne(this.props.match.params.beerId)
            .then((apiResponse) => {
                console.log(apiResponse.data);
                this.setState({ beer: apiResponse.data })
            })
            .catch((error) => console.log(error));
            console.log(this.props.match.params.beerId);
    }

    render() {
        return (
            <div>                
                <Header />
                <div id="main-one-beer">
                {this.state.beer && (
                    <div className="container-one-beer">
                        <img src={this.state.beer.image_url} alt=""/>
                        <div className="text-random-beer">
                            <div className="divtext1">
                                <h2>{this.state.beer.name}</h2>
                                <p>{this.state.beer.attenuation_level}</p>
                            </div>
                            <br/>
                            <div className="divtext1">
                                <p>{this.state.beer.tagline}</p>
                                <p>{this.state.beer.first_brewed}</p>
                            </div>
                            <br/>
                            <p>{this.state.beer.description}</p>
                            <br/>
                            <p>{this.state.beer.contributed_by}</p>
                        </div>
                    </div>
                )  
                }
                </div>
             </div>
        )
    }
}

export default OneBeer;