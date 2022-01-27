import Marionette from 'backbone.marionette'
import MyTemplate from '../templates/mytemplate.html'

export default class MyView extends Marionette.LayoutView {
  constructor(options) {
    options.template = MyTemplate
    options.el = '#my-app-hook'
    console.log("options");
    console.log(options);
    super(options)
  }

  onRender() {
    console.log("onRender");
    const view = new MyView()
  }

  ui() {
    return {
      content: '.mytext',
      input: '.myinput',
      save: '.mybutton'
    }
  }

  events() {
    console.log("events")
    return {
      'click .mybutton': 'alertBox',
      'click @ui.save': 'changeDiv'
    }
  }

  alertBox() {
    alert('Button Clicked')
  }

  changeDiv() {
    var text = this.ui.input.val()
    this.ui.content.text(text)
  }
}
