import Component from './Component'

export default class TextInput extends Component {
  readonly element: HTMLInputElement

  public onInput: (text: string) => void = (text: string) => {
    throw new Error('The input handler has not been defined in a TextInput component.')
  }
  public onChange: (text: string) => void = (text: string) => {
    throw new Error('The change handler has not been defined in a TextInput component.')
  }

  constructor () {
    super()
    this.element = document.createElement('input')
    this.element.type = 'text'
    // event handler for the 'input' event
    this.element.addEventListener('input', (e: Event) => {
      e.preventDefault()
      e.stopPropagation()
      this.onInput(this.element.value)
    })
    // event handler for the 'change' event
    this.element.addEventListener('change', (e: Event) => {
      e.preventDefault()
      e.stopPropagation()
      this.onChange(this.element.value)
    })
  }

  get placeholder (): string {
    return this.element.placeholder
  }
  set placeholder(text: string) {
    this.element.placeholder = text
  }

  get value (): string {
    return this.element.value
  }
  set value(text: string) {
    this.element.value = text
  }
}
