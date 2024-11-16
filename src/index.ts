import { User } from './models/User'

const user = new User({ name: 'Bob', age: 58 })

user.set({ age: 65 })

console.log(user.get('name'))
console.log(user.get('age'))