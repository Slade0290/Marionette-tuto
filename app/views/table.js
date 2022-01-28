var Marionette = require('backbone.marionette')

var Row = Marionette.LayoutView.extend({
  tagName: 'tr',
  template: require('../templates/row.html')
});

var Table = Marionette.CompositeView.extend({
  el: '#app-hook',
  tagName: 'table',
  template: require('../templates/table.html'),

  childView: Row,
  childViewContainer: 'tbody',

  modelEvents: {
    sync: 'render'
  },

  collectionEvents: {
    update: 'checkStatus'
  },

  checkStatus: function(collection) {
    collection.each(function(model) {
      console.log('checkStatus');
    });
  }
});

module.exports = Table;
