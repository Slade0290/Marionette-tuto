var Backbone = require('backbone')
var Marionette = require('backbone.marionette')
var TodoModel = require('./models/todo')

var TodoItem = Marionette.LayoutView.extend({
  tagName: 'li',
  template: require('./templates/todoitem.html')
})

var TodoList = Marionette.CompositeView.extend({
  el: '#app-hook',
  template: require('./templates/todolist.html'),

  childView: TodoItem,
  childViewContainer: 'ul',

  ui: {
    assignee: '#id_assignee',
    form: 'form',
    text: '#id_text'
  },

  triggers: {
    'submit @ui.form': 'add:todo:item'
  },

  collectionEvents: {
    add: 'itemAdded'
  },

  modelEvents: {
    change: 'render'
  },

  onAddTodoItem: function() {
    this.model.set({
      assignee: this.ui.assignee.val(),
      text: this.ui.text.val()
    })

    if(this.model.isValid()) {
      var items = this.model.pick('assignee', 'text')
      this.collection.add(items)
    }
  },

  itemAdded: function() {
    console.log("Don't clear the inputs we need it for testing purposes !");
    // this.ui.assignee.val('')
    // this.ui.text.val('')
    // -- or with model --
    // this.model.set({
    //   assignee: '',
    //   text: ''
    // })
  }
})

var todo = new TodoList({
  collection: new Backbone.Collection([
      {assignee: 'Scott', text: 'Write a book about Marionette'},
      {assignee: 'Andrew', text: 'Do some coding'}
    ]),
    model: new TodoModel()
})

todo.render()
