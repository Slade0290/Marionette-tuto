import Marionette from 'backbone.marionette'
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
}
