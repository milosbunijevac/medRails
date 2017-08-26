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
      <div className = "container" onMouseUpCapture={this.handleChange.bind(this)}>
        <h1 className = "headLine" >Medium Markup</h1>
          <p className='editable'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id felis vel sem tristique efficitur. Nunc neque purus, tempor eget urna eu, porttitor congue nulla. Morbi vitae lectus sollicitudin, congue dolor ac, ornare ex. Aenean molestie rutrum mauris, vel ultricies erat pellentesque eget. Nunc at nisi id turpis lobortis ultrices ac eget mi. Cras ac facilisis leo. Vestibulum a enim eget ex tempor pretium. Nunc dignissim bibendum molestie. Fusce imperdiet imperdiet tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nec gravida massa. Fusce tristique, nulla vitae porttitor venenatis, mi sem fermentum metus, sit amet auctor mi nisl nec erat.</p>
          <p className='editable'>Sed eget nunc sit amet lacus commodo sodales. Nulla vel mi vel nibh sagittis venenatis. Curabitur et dictum ipsum, vel elementum quam. Quisque placerat mi velit, id egestas erat mattis a. Nam quis efficitur magna. Nullam eleifend erat nulla, eget facilisis nibh ultrices quis. Mauris porttitor dui sed mi consectetur, eu ultricies nibh tempor. Praesent quis tellus ipsum. Sed a justo non ipsum tempor vehicula. Fusce blandit ac sem vitae lacinia. Phasellus a euismod augue. Pellentesque ut metus porta tellus interdum convallis in vestibulum lacus. Etiam imperdiet fringilla ex.</p>
          <p className='editable'>Fusce aliquet tincidunt libero, id blandit justo euismod et. Vivamus est erat, ullamcorper et iaculis eu, tincidunt sed enim. Quisque felis magna, eleifend eget pulvinar non, consequat in tortor. Donec laoreet faucibus risus, sed tempor velit scelerisque id. Cras nibh ligula, euismod eu dolor a, luctus elementum diam. Integer pharetra, quam ac condimentum porttitor, mi odio aliquam leo, non feugiat magna nulla finibus nisi. Pellentesque arcu quam, rutrum eget nunc sed, tincidunt aliquam ante.</p>
        <p className='editable'>Aliquam lobortis mauris ut consequat elementum. Morbi auctor lacinia felis, eget elementum felis cursus in. Aliquam sed orci non tellus pulvinar porttitor. Aliquam sed porttitor eros. Vivamus semper eget ligula id tempor. Cras tellus magna, condimentum id tortor in, congue laoreet nibh. Nulla pellentesque, magna vitae vehicula lobortis, justo ligula faucibus lorem, at convallis purus enim sed ligula. Vivamus tempor eleifend libero ac lacinia. Duis imperdiet urna arcu, in fermentum justo varius vitae. Sed non gravida sapien, sit amet vehicula purus. Donec sollicitudin purus a lacus mattis, ut rutrum velit malesuada.</p>
        
      </div>
    );
  }

  handleChange() {
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
    div.style.position = 'absolute';
    
    div.style.backgroundColor = 'yellow';
    div.style.color = 'black';
    div.style.top = (rect.top + -20) + 'px';
    div.style.left= (rect.left) + 'px';
    div.style.height = rect.height + 'px';
    div.style.width = rect.width + 'px';
    // console.log('this is the rect: ', rect);
    // if(div.style.border = '2px solid black'){
    //   div.style.border = '';
    // }
    // div.style.border = '2px solid black';      // with outline
    // div.style.position = 'fixed';              // fixed positioning = easy mode
    // div.style.top = rect.top + 'px';       // set coordinates
    // div.style.left = rect.left + 'px';
    // div.style.bottom = (rect.bottom + 10) + 'px';
    // div.style.height = rect.height + 'px'; // and size
    // div.style.width = rect.width + 'px';
    document.body.appendChild(div);
  }
}

export default Main;


