import React, { Component } from 'react';
import {TYPES} from '../../../actions/widgets';
import WeatherWidget from './WeatherWidget/WeatherWidget';

class WidgetList extends Component {

  renderWidgets (widget, index) {
  	switch (widget.type) {
		case TYPES.WEATHER:
			return <WeatherWidget key={index} widget={widget} />
      default: return null;
  	}
  }
  
  render() {
    return (
      <div>
       	 {this.props.widgets.map(this.renderWidgets.bind(this))}
      </div>
    );
  };

}

export default WidgetList;