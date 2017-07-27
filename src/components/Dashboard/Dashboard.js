import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as WidgetActions from '../../actions/widgets';
import './Dashboard.css';
import Button from './../Common/Button';
import WidgetList from './Widgets/WidgetList';


function mapStateToProps(state) {
	return {widgets: state.widgets}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(WidgetActions, dispatch);
}

class Dashboard extends Component {

  render() {
    return (
      <div className="dashboard">
				<Button onClick={()=>this.props.newWeatherWidget()} />
      	<WidgetList className="widgetList" widgets={this.props.widgets} />
        <a id="link" href="https://darksky.net/poweredby/"> Powered by Dark Sky</a>
      </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
