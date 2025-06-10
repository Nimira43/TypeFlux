export abstract class View {
  constructor(
    public parent: Element,
    public model: User
  ) { 
    this.bindModel()
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render()
    })
  }
}