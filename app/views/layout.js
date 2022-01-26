import Marionette from 'backbone.marionette'

import FormView from './form'
import ListView from './list'
import LayoutTemplate from '../templates/layout.html'

export default class TodoView extends Marionette.LayoutView {
  constructor(options) {
    options.template = LayoutTemplate
    options.el = '#app-hook'
    options.regions = {
      form: '.form',
      list: '.list'
    }
    super(options)
  }

  onRender() {
    const formView = new FormView({model: this.model})
    formView.on('add:item', this.onChildviewAddItem, this)
    this.listView = new ListView({collection: this.collection})
    this.showChildView('form', formView)
    this.showChildView('list', this.listView)
  }

  onChildviewAddItem(assignee, text) {
    this.listView.addItem(assignee,text)
  }
}
