import Marionette from 'backbone.marionette'
import Backbone from 'backbone'
import TodoItemTemplate from '../templates/todoitem.html'

class Todo extends Marionette.LayoutView {
  constructor(options) {
    options.template = TodoItemTemplate
    options.tagName = 'li'

    super(options)
  }
}

export default class ListView extends Marionette.CollectionView {
  constructor(options) {
    options.tagName = 'ul'
    options.childView = Todo

    super(options)
  }

  addItem(assignee, text) {
    this.collection.add({
      assignee: assignee,
      text: text
    })
  }
}
