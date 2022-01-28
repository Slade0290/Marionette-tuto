var Marionette = require('backbone.marionette')
var Summary = require('./summary')
var Table = require('./table')

var MyLayout = Marionette.LayoutView.extend({
  template: require('./layout.html'),
  regions: {
    summary: '.summary',
    report: '.report'
  },

  onShow: function() {
    var summary = new Summary({model: new Backbone.Model})
    var table = new Table({collection: new Backbone.Collection})

    this.showChildView('summary', summary)
    this.showChildView('table', table)
  }
})

module.exports = MyLayout
