import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import { createStore } from 'redux';
import {rootReducer} from './reducers';

const store = createStore(rootReducer);

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
    	 <Provider store={store}>
         <MuiThemeProvider>
      		<div className="App">
        	  <Dashboard />
      		</div>
        </MuiThemeProvider>
      	</Provider>
    );
  }

}

export default App;
