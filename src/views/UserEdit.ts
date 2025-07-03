import { View } from './View'
import { User, UserProps } from '../models/User'

export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: '.user-show',
      userEdit: '.user-edit'
    }
  }

  template() {
    return `
      <div>
        <div class='user-show'></div>
        <div class='user-form'></div>
      </div>
    `
  }
}
