import React from 'react';
import axios from 'axios';


class JokeContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            persons: []
        }
    }

    componentDidMount() {
      this.getJokes();
    }

    getJokes(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }

    com
    
    
    render(){
        return(
            <div className="card text-center">
            <div className="card-header">
              Funny Jokes!!
            </div>
            <div className="card-body">
              <h5 className="card-title">Joke Id :</h5>
              <p className="card-text"> { this.state.persons.map(person => <li>{person.name}</li>)}</p>
              <a href="#" className="btn btn-primary" onClick ={this.getJokes.bind(this)}>Next Joke</a>
            </div>
            <div className="card-footer text-muted">
             @CopyRights - All rights reserved. Created by
            </div>
          </div>
        )
    }

}

export default JokeContainer;