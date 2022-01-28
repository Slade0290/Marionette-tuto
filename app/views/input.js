var Marionette = require('backbone.marionette');

var Input = Marionette.LayoutView.extend({
  template: require('./input.html'),

  ui: {
    input: '.myinput',
    button: '.mybutton'
  },

  events: {
    'click @ui.button': 'updateModel'
  },

  updateModel: function() {
    var text = this.ui.input.val();
    this.model.update({
      mytext: text
    });
  }
});

module.exports = Input;
