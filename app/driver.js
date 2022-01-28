var Marionette = require('backbone.marionette');
var Table = require('./views/table');

var app = new Marionette.Application({
  onStart: function(options) {

    var collection = new Backbone.Collection([
      {name: 'John Smith', gender: 'male', nationality: 'UK', url: '/items/1'},
      {name: 'Jane Doe', gender: 'female', nationality: 'USA', url: '/items/4'}
    ]);

    var model = new Backbone.Model({
      total: 30
    });

    var view = new Table({
      collection: collection,
      model: model
    });
    view.render();
  }
});

app.start();
