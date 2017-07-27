import React, { Component } from 'react';

class Widget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: {
        
      }
    }
  }

  render() {
    return (
      <div>
      	<div className="front">
      		{this.renderFront()}
      	</div>
      	<div className="back">
			{this.renderBack()}
      	</div>
      </div>
    );
  };

}

export default Widget;
