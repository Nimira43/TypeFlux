import { User } from './models/User'

const user = new User({ name: 'Bob', age: 58 })

user.on('change', () => {})
user.on('create', () => {})
user.on('delete', () => {})

console.log(user)