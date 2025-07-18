// Don't forget to start the JSON Server when coming back to the project!!!

// npm run start:db

import { UserEdit } from './views/UserEdit'
import { User } from './models/User'

const user = User.buildUser({
  name: 'Name',
  age: 18
})
const root = document.getElementById('root')

if (root) {
  const userEdit = new UserEdit(root, user)
  userEdit.render()
  console.log(userEdit)
} else {
  throw new Error('Root element not found.')
}




