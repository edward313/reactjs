import axiosClient from './axiosClient'
import axios from 'axios';
const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnaWFuZzAxMDhAZ21haWwuY29tIiwiZXhwIjoxNjY5ODMwMzE4LCJpYXQiOjE2Njk3OTQzMTh9.u9zJfvb98umqW7-jd6DVhC5hGUG4nQJ4GCx0imW3UvcZqlxIQXi_lUtPYLoSYj6H5kotmkgohzxh_jrTeaMnHw'
const ProductApi ={
    // GetAllProduct:() => { 
    //     return axiosClient.get("product/get_all", {
    //         headers: {
    //           'Authorization': `Bearer ${token}` 
    //         } }).then(console.log).catch(console.log);

    // },

     GetAllProduct:() => { 
        axios.defaults.headers.common['Authorization'] = token
        return axios.get("http://localhost:8080/api/v1/product/get_all", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
              
            } }).catch(error =>{console.log(error)})

    },
    GetOneProduct:(Productid) => {
        return axiosClient.get("products/"+ Productid)
    }
} 
export default ProductApi;