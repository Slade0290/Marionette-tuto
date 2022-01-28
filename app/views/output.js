var Marionette = require('backbone.marionette');

var Output = Marionette.LayoutView.extend({
  template: require('./output.html'),

  modelEvents: {
    'change:mytext': 'render'
  }
});

module.exports = Output;
