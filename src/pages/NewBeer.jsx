import React from 'react';
import Header from "../components/Header";
import beersAPI from "../api/beersApi";
import "../styles/new-beer.css"

class NewBeer extends React.Component {

    state = {
        name: "",
        tagline: "",
        description: "",
        FirstBrewed: "",
        BrewersTips: "",
        Attenuationlevel: 0,
        Contributedby: "",
    };

    handleChange = (event) => {
        // console.log("handling");
        // console.log(event.target);
        // console.log(event.target.value);

        const key = event.target.name;
        const value = event.target.value;

        this.setState({
            [key]: event.target.type === 'number' ? parseInt(value) : value,
            // [key]: value,
        });
    };



    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

        beersAPI
            .createBeer(this.state)
            .then((apiResponse) => {
                console.log(apiResponse);
                window.location = "/AllBeers";
            })
            .catch((error) => {
                console.log(error)
            })
    };

    render() {
        return (
            <div>
                <Header />
                <div id='main-contain-form'>
                
                <form onSubmit={this.handleSubmit}>
                    <div id="title">
                        <h1>Add a beer</h1>
                    </div>
                    <label htmlFor="name">
                        Name
                    </label>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        name="name"
                        value={this.state.name}
                    />
                    <label htmlFor="tagline">
                        Tagline
                    </label>
                    <input 
                        onChange={this.handleChange}
                        type="text"
                        name="tagline"
                        value={this.state.tagline}

                    />
                    <label htmlFor="description">
                        Description
                    </label>
                    <input
                        onChange={this.handleChange} 
                        type="text"
                        name="description"
                        value={this.state.description}

                    />
                    <label htmlFor="FirstBrewed">
                        First Brewed
                    </label>
                    <input
                        onChange={this.handleChange} 
                        type="text"
                        name="FirstBrewed"
                        value={this.state.FirstBrewed}

                    />
                    <label htmlFor="BrewersTips">
                        Brewers Tips
                    </label>
                    <input 
                        onChange={this.handleChange}    
                        type="text"
                        name="BrewersTips"
                        value={this.state.BrewersTips}

                    />
                    <label htmlFor="Attenuationlevel">
                        Attenuation level
                    </label>
                    <input 
                        onChange={this.handleChange}
                        type="Number"
                        name="Attenuationlevel"
                        value={this.state.Attenuationlevel}

                    />
                    <label htmlFor="Contributedby">
                        Contributed by
                    </label>
                    <input 
                        onChange={this.handleChange}
                        type="text"
                        name="Contributedby"
                        value={this.state.Contributedby}

                    />
                    <div id="button-submit">
                        <button>Submit</button>
                    </div>
                </form>
                </div>
            </div>
        )
    
    }

}

export default NewBeer;
