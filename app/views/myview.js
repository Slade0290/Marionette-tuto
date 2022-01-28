import Marionette from 'backbone.marionette'
import MyTemplate from '../templates/mytemplate.html'

export default class MyView extends Marionette.LayoutView {
  template() {
    return MyTemplate
  }

  el() {
    return '#my-app-hook'
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
    console.log(this.ui.input);
    var text = this.ui.input.val()
    this.ui.content.text(text)
  }
}
