import React, { Component } from 'react';

class Widget extends Component {
  
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