import { User } from './models/User'

const user = new User({ name: 'Sylvester', age: 63 })

user.events.on('change', () => {
  console.log('Changed - The Nesting Way!!!!')
})

user.events.trigger('change')