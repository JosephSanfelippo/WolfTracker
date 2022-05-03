import React from 'react';
import ReactDom from 'react-dom';
const axios = require('axios');


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      info: ""
    };
  }

  render() {
    return(
      <div className="app">
        <title>WolfTracker</title>
      </div>
    )
  }

}


ReactDom.render(<App />, document.getElementById('root'));