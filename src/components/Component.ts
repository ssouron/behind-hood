export default abstract class Component {
  abstract element: HTMLElement

  public render (parent: HTMLElement | Component): void {
    if (parent instanceof Component) {
      parent.element.appendChild(this.element)
    } else {
      parent.appendChild(this.element)
    }
  }
}
