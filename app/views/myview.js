var Marionette = require('backbone.marionette');

var MyView = Marionette.LayoutView.extend({
  el: '#app-hook',
  template: require('../templates/mytemplate.html'),

  ui: {
    content: '.mytext',
    input: '.myinput',
    save: '.mybutton'
  },

  events: {
    'click @ui.save': 'changeDiv'
  },

  changeDiv: function() {
    var text = this.ui.input.val();
    this.ui.content.text(text);
  },

  // modelEvents: {
  //   'change': 'changeAnything',
  //   'change:myfield': 'changeSpecificField'
  // },
  //
  // changeAnything: function(model, options) {
  //   alert('Triggered on any field change');
  // },
  //
  // changeSpecificField: function(model, value, options) {
  //   alert('Triggered because myfield changed - ' + value);
  // },

  modelEvents: {
    save: 'afterSave'
  },

  afterSave: function(model, options) {
    alert('Model was saved');
  },

  onButtonClicked: function() {
    var model = this.model;
    model.save({
      success: function() {
        model.trigger('save', model, {});
      }
    });
  }
});

// view = new MyView();
// view.render();

module.exports = MyView;
