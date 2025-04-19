export class UserForm {
  parent: Element

  template(): string {
    return `
      <div>
        <h1>TypeFlux User Form</h1>
        <input />
      </div>  
    
    `
  }
  render(): void {
    const templateElement = document.createElement('template')
  }

}