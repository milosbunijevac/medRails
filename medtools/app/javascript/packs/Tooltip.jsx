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
      <div className="container">
        <button onClick={this.props.highL} className="buttons">Highlight</button>
        <button onClick={this.commentBoxControl} className="buttons">Comment</button>
      </div>
    )
  }

  commentBoxControl() {
    var div = document.createElement('div');
    div.className = 'commentBox';
      ReactDOM.render(
        <CommentBox />,
        document.body.appendChild(div),
      )
    
  }

  removeCommentBoxControl() {
    var elements = document.getElementsByClassName('commentBox');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
  }
}

export default Tooltip;