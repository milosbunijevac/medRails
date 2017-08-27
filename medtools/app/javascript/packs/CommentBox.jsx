import React from 'react';


class CommentBox extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className = "container">
                <h3> Please enter a comment! </h3>
                <textarea className="textAreaBox"></textarea>
            </div>
        )
    }


}

export default CommentBox;