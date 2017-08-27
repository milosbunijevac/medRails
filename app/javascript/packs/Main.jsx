import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from './Tooltip.jsx';
import SideComments from './SideComments.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '', comments: '', showSideComments: false, recentHighlight: ''}
    this.commentRetrieve = this.commentRetrieve.bind(this);
  }

  componentDidMount() {
    if(!this.state.showSideComments){
      var storagePopulated = JSON.parse(localStorage.getItem("defaultUser"))
      if(storagePopulated){
        this.setState({showSideComments: true})
      }
    }
  }

  render() {
    return (
      <div className = "container mainTextBody" onMouseDown={this.removetoolBox.bind(this)} onMouseUpCapture={this.captureSelection.bind(this)}>
        <h1 className = "headLine" >Medium Markup</h1>
          <hr />
          <p className='editable'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id felis vel sem tristique efficitur. Nunc neque purus, tempor eget urna eu, porttitor congue nulla. Morbi vitae lectus sollicitudin, congue dolor ac, ornare ex. Aenean molestie rutrum mauris, vel ultricies erat pellentesque eget. Nunc at nisi id turpis lobortis ultrices ac eget mi. Cras ac facilisis leo. Vestibulum a enim eget ex tempor pretium. Nunc dignissim bibendum molestie. Fusce imperdiet imperdiet tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nec gravida massa. Fusce tristique, nulla vitae porttitor venenatis, mi sem fermentum metus, sit amet auctor mi nisl nec erat.</p>
          {(this.state.showSideComments) ? <SideComments /> : ''}
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

    this.setState({text: selectedText.toString()})
    if(selectedText.toString() !== ''){
      this.toolBox();
    }
    
  }

  highLightText() {
    var selection = window.getSelection();
    var parent = selection.anchorNode.parentElement;
    var selection_text = selection.toString();
    var range = selection.getRangeAt(0);
    this.setState({recentHighlight: selection_text});

    if(selection.extentNode.nextSibling){
      // remove mark tag
      if(selection.extentNode.nextSibling.nodeName == "MARK"){
        var span = document.createElement('span');

        console.log(this.state.recentHighlight);
        span.textContent = this.state.recentHighlight;
        range.deleteContents();
        range.insertNode(span);
      }
    } else {
      var mark = document.createElement('mark');
      mark.textContent = selection_text;
      range.deleteContents();
      range.insertNode(mark);
    }

  }

  commentText() {
    if (typeof(Storage) !== "undefined") {
      var storagetest = JSON.parse(localStorage.getItem("defaultUser"))
      if(!storagetest){
        var comments = [];
        comments.push(this.state.comments);
        localStorage.setItem('defaultUser', JSON.stringify(comments))
        this.setState({showSideComments: true})
      }
      storagetest.push(this.state.comments);
      localStorage.setItem('defaultUser', JSON.stringify(storagetest))
      this.setState({showSideComments: true})
    } else {
        alert('Sorry, this browser does not have support for localStorage');
    }
  }

  toolBox() {
    var selection = window.getSelection()
    var range = selection.getRangeAt(0);
    var rect = range.getBoundingClientRect();
    var div = document.createElement('div');
    div.style.top = (rect.top + -55) + 'px';
    div.style.left= (rect.left + -65) + 'px';
    div.style.height = 35 + 'px';
    div.style.width = rect.width + 'px';
    div.className = 'toolTip';
    ReactDOM.render(
      <Tooltip highL={this.highLightText.bind(this)} commentT={this.commentText.bind(this)} commentR={this.commentRetrieve}/>,
      document.body.appendChild(div),
    )
    document.body.appendChild(div);
  }

  commentRetrieve(event) {
    this.setState({comments: event.target.value});
  }
  
  removetoolBox() {
    var elements = document.getElementsByClassName('toolTip');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    this.removeCommentBoxControl();
  }

  removeCommentBoxControl() {
    var elements = document.getElementsByClassName('commentBox');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
  }
}

export default Main;


