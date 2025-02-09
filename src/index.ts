import { User } from './models/User'

const user = new User({ name: 'Bob', age: 58 })

user.on('change', () => {
  console.log('Change 1')
})
user.on('change', () => {
  console.log('Change 2')
})
user.on('save', () => {
  console.log('User Saved!')
})

user.trigger('change')