import Backbone from 'backbone'
import Marionette from 'backbone.marionette'

import TodoView from './views/layout'
import TodoModel from './models/todo'

import MyView from './views/myview'

const initialData = [
  {assignee: 'Scott', text: 'Write a book about Marionette'},
  {assignee: 'Andrew', text: 'Do some coding'}
]

export class TodoApp extends Marionette.Application {
  onStart(options) {
    const todoView = new TodoView({
      collection: new Backbone.Collection(options.initialData),
      model: new TodoModel()
    })
    todoView.render()
    const myView = new MyView({
      model: new Backbone.Model()
    })
    myView.render()
  }
}

window.app = new TodoApp
window.app.start({initialData: initialData})
