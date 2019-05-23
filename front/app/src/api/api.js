const axios = require('axios');//livello tra front end e db per richiedere e spacchettare i json

//INSERT IP ADDRESS IN LOCAL NETWORK
export function baseURL(){
  //var baseURL='http://localhost:3000';
  var baseURL='http://192.168.43.94:3000';
  return baseURL
};

const instance = axios.create({
  //baseURL: 'http://localhost:3000',
  baseURL: 'http://192.168.43.94:3000',
  timeout: 10000
});

export async function getAllData () {
    const response = await instance.get('/picture/dbtest')
    console.log(response.data)
    console.log('axios')

    return response.data
  }

  export async function generalSearch (formData) {
    const response = await instance.post('/picture/Search', {FormData: formData})
    console.log(formData)
    console.log('axios-RESPONSE OBTAINED BY GEN SEARCH')
    console.log(response.data)
   

    return response.data
  }

