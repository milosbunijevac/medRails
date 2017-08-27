import React from 'react';
import ReactDOM from 'react-dom';
import SideCommentsView from './SideCommentsView.jsx'; 

class SideComments extends React.Component {
    constructor(props){
        super(props);
        this.state = {areCommentsShown: false}
        this.showComments = this.showComments.bind(this);
    }

    render() {
        return (
            <div className="sideComment">
                <button id="sideButton" onClick={this.showComments}>Comments</button>
            </div>
        )
    }

    showComments() {
        if(!this.state.areCommentsShown){
            var div = document.createElement('div');
            div.className = "sideCommentView";
            ReactDOM.render(
                <SideCommentsView />,
                document.body.appendChild(div),
            )
            this.setState({areCommentsShown: true});
        } else {
            var elements = document.getElementsByClassName('sideCommentView');
            while(elements.length > 0){
                elements[0].parentNode.removeChild(elements[0]);
            }
            this.setState({areCommentsShown: false});
        }
    }
}

export default SideComments;