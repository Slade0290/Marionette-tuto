var Marionette = require('backbone.marionette')

var Item = Marionette.LayoutView.extend({
  tagName: 'li',
  template: require('../templates/item.html')
});

var List = Marionette.CollectionView.extend({
  tagName: 'ul',
  childView: Item,

  collectionEvents: {
    add: 'itemAdded'
  },

  itemAdded: function(collection) {
    alert('New item added');
  }
});

module.exports = List;
