// Don't forget to start the JSON Server when coming back to the project!!!

// npm run start:db

import { User } from './models/User'

const user = User.buildUser({id: 1})

user.on('change', () => {
  console.log(user)
})

user.fetch()

