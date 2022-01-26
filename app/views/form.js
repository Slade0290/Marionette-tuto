var Marionette = require('backbone.marionette')

var FormView = Marionette.View.extend({
  tagName: 'form',
  template: require('../templates/form.html'),
  //
  // triggers: {
  //   submit: 'add:todo:item'
  // },

  events: {
    submit: 'handleSubmit'
  },

  handleSubmit: function() {
    console.log('handleSubmit')
    this.trigger('add:item', this.ui.assignee.val(), this.ui.text.val())
    return false
  },

  modelEvents: {
    change: 'render'
  },

  ui: {
    assignee: '#id_assignee',
    text: '#id_text'
  },
})

module.exports = FormView
