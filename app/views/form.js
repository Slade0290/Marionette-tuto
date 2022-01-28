import Marionette from 'backbone.marionette'
import FormTemplate from 'templates/form.html'

export default class FormView extends Marionette.LayoutView {
  constructor(options) {
    options.template = FormTemplate
    options.tagName = 'form'

    super(options)
  }

  events() {
    return {
      submit: 'handleSubmit'
    }
  }

  handleSubmit() {
    this.trigger('add:item', this.ui.assignee.val(), this.ui.text.val())
    return false
  }

  ui() {
    return {
      assignee: '#id_assignee',
      text: '#id_text'
    }
  }
}
