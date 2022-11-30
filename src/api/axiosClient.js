import axios  from 'axios'


const URL = "http://localhost:8080/api/v1/"
const axiosClient = axios.create({
    baseURL: URL,
    header: {
        'Content-Type': 'appplication/json',
        'Access-Control-Allow-Origin': '*',
    },
    
})
axiosClient.interceptors.request.use(async (config) => {
  const customHeaders = {};

  
  // if (accessToken) {
  //   customHeaders.Authorization = "Bearer " + accessToken;
  // }
  
  return {
    ...config,
    headers: {
      ...customHeaders,  // auto attach token
      ...config.headers, // but you can override for some requests
    }
  };
});

export default axiosClient;


