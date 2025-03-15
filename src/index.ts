// Don't forget to start the JSON Server when coming back to the project!!!

// npm run start:db

import { User } from './models/User'

const user = new User({ id: 1, name: 'Jason', age: 42 })

user.on('save', () => {
  console.log(user)
})

user.save()