import React from 'react';


class CommentBox extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className = "container">
                <h3> Please enter a comment! </h3>
                <textarea onChange={this.props.commentR} className="textAreaBox"></textarea>
                <button onClick={this.props.commentT} className="buttonCommentSubmit row">Submit</button>
            </div>
        )
    }


}

export default CommentBox;