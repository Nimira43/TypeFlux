import { User } from './models/User'

const user = new User({ id: 1 })

user.set({ name: 'Tom', age: 58 })
user.save()