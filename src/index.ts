import { User } from './models/User'

const user = new User({ name: 'Sylvester', age: 63 })

console.log(user.get('name'))

