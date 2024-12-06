import { User } from './models/User'

const user = new User({ name: 'Bob', age: 58 })

user.on('change', () => {

})

console.log(user)