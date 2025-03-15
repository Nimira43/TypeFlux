import { User } from './models/User'

const user = new User({ name: 'Sylvester', age: 63 })

class Person {
  constructor(
    public firstName: string,
    public lastName: string
  ) { }
  
  fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
} 