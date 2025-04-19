// Don't forget to start the JSON Server when coming back to the project!!!

// npm run start:db

import { UserForm } from './views/UserForm'
import { User } from './models/User'

const user = User.buildUser({
  name: 'Colin',
  age: 35
})

const userForm = new UserForm(
  document.getElementById('root')
)

userForm.render()
