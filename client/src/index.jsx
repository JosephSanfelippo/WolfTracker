import React from 'react';
import ReactDom from 'react-dom';
import { render } from 'react-dom';
import Overview from './components/overview.jsx';
const axios = require('axios');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: ""
    };
  }

  render() {
    return(
      <div className="app">
        <h1>WolfTracker</h1>
        <Overview />
      </div>
    )
  }

}


ReactDom.render(<App />, document.getElementById('root'));