var Backbone = require('backbone')
var Marionette = require('backbone.marionette')

class TodoItem extends Marionette.View {
  tagName = 'li'
  template = require('../templates/todoitem.html')
}

class TodoList extends Marionette.CollectionView {
  tagName = 'ul'
  childView = TodoItem

  initialize () {
    this.collection = new Backbone.Collection()
  }

  addItem (assignee, text) {
    this.collection.add({
      assignee: assignee,
      text: text
    })
  }
}

module.exports = TodoList
