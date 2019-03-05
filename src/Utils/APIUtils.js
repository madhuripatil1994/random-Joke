import axios from 'axios';

var axiosAPI = () => {
    axios.create({
        baseURL: `http://jsonplaceholder.typicode.com/`
      });
}

module.exports ={
    axiosAPI
}