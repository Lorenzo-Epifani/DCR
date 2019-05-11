const axios = require('axios');//livello tra front end e db per richiedere e spacchettare i json

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000
});

export async function getAllData () {
    const response = await instance.get('/picture/dbtest')
    console.log(response.data)
    console.log('axios')

    return response.data
  }

  export async function generalSearch () {
    const response = await instance.get('/picture/Search')
    console.log(response.data)
    console.log('axios')

    return response.data
  }