import Component from './Component'

export default class Viewer extends Component {
  readonly element: HTMLDivElement
  private _label: string = ''
  private _content: string = ''

  constructor () {
    super()
    this.element = document.createElement('div')
    this.element.className = 'viewer'
  }

  get label (): string {
    return this._label
  }
  set label (value: string) {
    this._label = value
    this.update()
  }

  get content (): string {
    return this._content
  }
  set content (value: string) {
    this._content = value
    this.update()
  }

  update () {
    this.element.innerHTML = `
    <label>${this._label}&nbsp;</label>
    <p>${this._content}&nbsp;</p>
  `
  }
}
