// Don't forget to start the JSON Server when coming back to the project!!!

// npm run start:db

import axios, { AxiosResponse } from 'axios'

axios.get('http://localhost:3000/users')
  .then((response: AxiosResponse) => {
    console.log(response.data)
  })