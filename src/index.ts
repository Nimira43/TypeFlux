import { User } from './models/User'

const user = new User({ name: 'Bob', age: 58 })

user.set({ name: 'Bill', age: 64 })

console.log(user.get('name'))
console.log(user.get('age'))