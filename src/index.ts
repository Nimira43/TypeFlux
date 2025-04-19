// Don't forget to start the JSON Server when coming back to the project!!!

// npm run start:db

import { Collection } from './models/Collection';

const collection = new Collection('http://localhost:3000/users')

collection.on('change', () => {
  console.log(collection)
})


collection.fetch()