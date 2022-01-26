// var Marionette = require('backbone.marionette')
// var HelloWorld = Marionette.LayoutView.extend({
//   el: '#app-hook',
//   template: require('./templates/layout.html')
// })
//
// var hello = new HelloWorld()
//
// hello.render()

// var Backbone = require('backbone')
// var Marionette = require('backbone.marionette')
//
// var TodoList = Marionette.LayoutView.extend({
//   el: '#app-hook',
//   template: require('./templates/layout.html')
// })
//
// var tod = new TodoList({
//   model: new Backbone.Model({
//     items: [
//       {assignee: 'Scott', text: 'Write a book about Marionette'},
//       {assignee: 'Andrew', text: 'Do some coding'}
//     ]
//   })
// })
//
// todo.render()

//
// var Backbone = require('backbone')
// var Marionette = require('backbone.marionette')
//
// var TodoModel = require('../models/todo')
//
// console.log(Marionette)
// class TodoItem extends Marionette.View {
//   tagName = 'li'
//   template = require('../templates/todoitem.html')
// }
//
// var TodoList = Marionette.CollectionView.extend({
//   el: '#app-hook',
//   template: require('../templates/todolist.html'),
//
//   childView: TodoItem,
//   childViewContainer: 'ul',
//
//   ui: { // 1
//     assignee: '#id_assignee',
//     form: 'form',
//     text: '#id_text'
//   },
//
//   triggers: { // 2
//     'submit @ui.form': 'add:todo:item'
//   },
//
//   collectionEvents: { // 3
//     add: 'itemAdded'
//   },
//
//   onAddTodoItem: function() { // 4
//     console.log(this.collection)
//     this.model.set({
//       assignee: this.ui.assignee.val(), // 5
//       text: this.ui.text.val()
//     })
//
//     console.log('this.model.isValid() :', this.model.isValid())
//     if (this.model.isValid()) {
//       var items = this.model.pick('assignee', 'text')
//       this.collection.add(items)
//     }
//   },
//
//   itemAdded: function() { // 6
//     console.log('itemAdded')
//     this.model.set({
//       assignee: '',
//       text: ''
//     })
//     this.ui.assignee.val('')
//     this.ui.text.val('')
//   }
// })
//
// // todo.render()
//  module.exports = TodoList
var Backbone = require('backbone')
var Marionette = require('backbone.marionette')

var FormView = require('./form')
var ListView = require('./list')

var Layout = Marionette.View.extend({
  el: '#app-hook',

  template: require('../templates/layout.html'),

  regions: {
    form: '.form',
    list: '.list'
  },

  collectionEvents: {
    add: 'itemAdded'
  },

  initialize: function() {
    this.collection = new Backbone.Collection()
    this.model = new Backbone.Model()
  },

  onShow: function() {
    var formView = new FormView({model: this.model})
    formView.on('add:item', this.onChildviewAddItem, this)
    this.listView = new ListView()

    this.showChildView('form', formView)
    this.showChildView('list', this.listView)
  },

  // onChildviewAddTodoItem: function(child) {
  //   this.model.set({
  //     assignee: child.ui.assignee.val(),
  //     text: child.ui.text.val()
  //   }, {validate: true})
  //
  //   var items = this.model.pick('assignee', 'text')
  //   this.collection.add(items)
  // },

  onChildviewAddItem: function(assignee, text) {
    console.log("addItem - assignee : ", assignee)
    this.listView.addItem(assignee, text)
    // this.model.set({
    //   assignee: assignee,
    //   text: text
    // }, {validate: true})
    //
    // var items = this.model.pick('assignee', 'text')
    // this.collection.add(items)
  },

  itemAdded: function() {
    this.model.set({
      assignee: '',
      text: '',
    })
  }
})

module.exports = Layout
