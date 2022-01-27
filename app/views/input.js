import Marionette from 'backbone.marionette'
import InputTemplate from '../templates/input.html'

export default class Input extends Marionette.LayoutView {
  constructor(options) {
    options.template = InputTemplate

    ui() {
      return {
        input: '.myinput',
        button: '.mybutton'
      }
    }

    events() {
      return {
        'click @ui.button': 'updateModel'
      }
    }

    updateModel() {
      var text = this.ui.input.val()
      this.model.update({
        mytext: text
      })
    }
  }
}
