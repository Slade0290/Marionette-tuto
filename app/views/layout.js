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

  onChildviewAddItem: function(assignee, text) {
    console.log("addItem - assignee : ", assignee)
    this.listView.addItem(assignee, text)
  },

  itemAdded: function() {
    this.model.set({
      assignee: '',
      text: '',
    })
  }
})

module.exports = Layout
