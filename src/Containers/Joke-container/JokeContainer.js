import React from 'react';
import{ axiosAPI } from '../../Utils/APIUtils';

class jokeContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            joke : []
        }
    }

    componentWillMount(){
        var joke = axiosAPI();
        console.log(joke);
    }

    render(){
        return(<div></div>)
    }

}

export default jokeContainer;