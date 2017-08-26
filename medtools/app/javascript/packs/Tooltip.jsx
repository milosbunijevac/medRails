import React from 'react'


class Tooltip extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div className="container">

        <button onClick={this.highl} className="buttons">Highlight</button>
        <button onClick={this.commentT} className="buttons">Comment</button>
      </div>
    )
  }
}

export default Tooltip;