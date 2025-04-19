// Don't forget to start the JSON Server when coming back to the project!!!

// npm run start:db

import { User } from './models/User'

const collection = User.buildUserCollection()


collection.on('change', () => {
  console.log(collection)
})


collection.fetch()