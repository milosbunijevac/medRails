require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/bootstrap.css');

import React from 'react';
import ReactTooltip from 'react-tooltip';
import Editor from 'react-medium-editor';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}
  }

  render() {
    return (
      <div className = "container" onMouseDown={this.removetoolBox.bind(this)} onMouseUpCapture={this.captureSelection.bind(this)}>
        <h1 className = "headLine" >Medium Markup</h1>
          <p className='editable'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id felis vel sem tristique efficitur. Nunc neque purus, tempor eget urna eu, porttitor congue nulla. Morbi vitae lectus sollicitudin, congue dolor ac, ornare ex. Aenean molestie rutrum mauris, vel ultricies erat pellentesque eget. Nunc at nisi id turpis lobortis ultrices ac eget mi. Cras ac facilisis leo. Vestibulum a enim eget ex tempor pretium. Nunc dignissim bibendum molestie. Fusce imperdiet imperdiet tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nec gravida massa. Fusce tristique, nulla vitae porttitor venenatis, mi sem fermentum metus, sit amet auctor mi nisl nec erat.</p>
      </div>
    );
  }

  captureSelection() {
    var selectedText = '';

    if(window.getSelection()){
      selectedText = window.getSelection();
    } else if (document.getSelection()) {
      selectedText = document.getSelection()
    } else if (document.selection) {
      selectedText = document.selection.createRange().text;
    }
    console.log('this is selectedtext: ', selectedText)
    this.setState({text: selectedText.toString()})
    if(selectedText.toString() !== ''){
      this.toolBox();
    }
    
  }

  toolBox() {
    var selection = window.getSelection()
    var range = selection.getRangeAt(0);
    var rect = range.getBoundingClientRect();
    var div = document.createElement('div');   // make box
    div.style.top = (rect.top + -75) + 'px';
    div.style.left= (rect.left) + 'px';
    div.style.height = 50 + 'px';
    div.style.width = rect.width + 'px';
    div.className = 'toolTip';
    document.body.appendChild(div);
  }
  
  removetoolBox() {
    console.log('remove box hit');
    var elements = document.getElementsByClassName('toolTip');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
  }
}

export default Main;


