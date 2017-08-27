import React from 'react'
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox.jsx';


class Tooltip extends React.Component {
  constructor(props){
    super(props);
    this.state = ({boxopen: false})
    this.commentBoxControl = this.commentBoxControl.bind(this);
  }

  render () {
    return (
      <div className="container" >
        <button onClick={this.props.highL} className="buttons">Highlight</button>
        <button onClick={this.commentBoxControl} className="buttons">Comment</button>
      </div>
    )
  }

  commentBoxControl() {
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var rect = range.getBoundingClientRect();
    var div = document.createElement('div');
    div.style.top = (rect.top + -75) + 'px';
    div.style.left = (rect.left + 180) + 'px';
    div.className = 'commentBox';
    ReactDOM.render(
      <CommentBox commentR={this.props.commentR}/>,
      document.body.appendChild(div),
    )
    
  }




}

export default Tooltip;