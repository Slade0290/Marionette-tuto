import Marionette from 'backbone.marionette'
import OutputTemplate from '../templates/output.html'

export default class Output extends Marionette.LayoutView {
  constructor(options) {
    options.template = OutputTemplate

    modelEvents() {
      change:mytext = 'render'
    }
  }
}
