import React from 'react';
import{ axiosAPI } from '../../Utils/APIUtils';

class MainContainer extends React.Component {

    render(){
         return(
            <div class="card text-center">
            <div class="card-header">
              Funny Jokes!!
            </div>
            <div class="card-body">
              <h5 class="card-title">Joke Id :</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Next Joke</a>
            </div>
            <div class="card-footer text-muted">
             @CopyRights - All rights reserved. Created by
            </div>
          </div>
         )
    }

}

export default MainContainer;