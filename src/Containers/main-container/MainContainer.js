import React from 'react';
import JokeContainer from '../Joke-container/JokeContainer'

class MainContainer extends React.Component {

    render(){
         return(
            <div className="card text-center">
              <JokeContainer />
            </div>
            
         )
    }

}

export default MainContainer;