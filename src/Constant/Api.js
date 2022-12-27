import axios from "axios";

export const Getfakestore =() =>{
    return axios.get('https://fakestoreapi.com/products')
}

export const Gettodostore =() =>{
    return axios.get('https://jsonplaceholder.typicode.com/todos')
}