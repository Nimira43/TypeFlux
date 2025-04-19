export class UserForm {
  constructor(public parent: Element) {}

  template(): string {
    return `
      <div>
        <h1 class='logo'>TypeFlux</h1>
        <h1>User Form</h1>
        <input />
      </div>  
    `
  }
  render(): void {
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()
    this.parent.append(templateElement.content)
  }
}