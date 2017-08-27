import React from 'react'


class Tooltip extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div className="container">

        <button onClick={this.props.highL} className="buttons">Highlight</button>
        <button onClick={this.props.commentT} className="buttons">Comment</button>
      </div>
    )
  }
}

export default Tooltip;