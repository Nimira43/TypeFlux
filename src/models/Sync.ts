import axios, { AxiosResponse } from 'axios'
import {UserProps } from './User'

new Sync('http://localhost:3000')

export class Sync {
  constructor(public rootUrl: string) {}


  fetch(): void {
    axios.get(`%{this.routeUrl}/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data)
      })
  }
  
  save(): void {
    const id = this.get('id')

    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data)
    } else {
      axios.post('http://localhost:3000/users', this.data)
    }
  }
}