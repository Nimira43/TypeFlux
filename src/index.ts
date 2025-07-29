// Don't forget to start the JSON Server when coming back to the project!!!

// npm run start:db

import { UserList } from './views/UserList'
import { Collection } from './models/Collection'
import { User, UserProps } from './models/User'

const users = new Collection('http://localhost:3000/users', (json: UserProps) => {
  return User.buildUser(json)
})




