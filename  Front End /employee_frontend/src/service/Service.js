
import axios from 'axios';

const instace = axios.create({
    baseURL:"http://localhost:8080/ems",
    timeout:1000,
    headers:{
        "Content-type":"Application/json"
    }
})

export default instace



 

