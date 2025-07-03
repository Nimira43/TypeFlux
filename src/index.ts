// Don't forget to start the JSON Server when coming back to the project!!!

// npm run start:db

import { UserForm } from './views/UserForm'
import { User } from './models/User'

const user = User.buildUser({
  name: 'Name',
  age: 53
})

const root = document.getElementById('root')

if (root) {
  const userForm = new UserForm(root, user)
  userForm.render()
} else {
  throw new Error('Root element not found.')
}




