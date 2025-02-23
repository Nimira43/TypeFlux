import axios, { AxiosResponse } from 'axios'
import {UserProps } from './User'

export class Sync {
  constructor(public rootUrl: string) {}

  fetch(): void {
    axios.get(`${this.rootUrl}/${this.get('id')}`).the(
      (response: AxiosResponse): void => {
      this.set(response.data)
      }
    )
  }
  
  save(data: UserProps): void {
    const id = this.get('id')

    if (id) {
      axios.put(`${this.rootUrl}/${id}`, data)
    } else {
      axios.post(this.rootUrl, data)
    }
  }
}