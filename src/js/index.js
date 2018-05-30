import React from 'react';
import ReactDOM from 'react-dom';
import StatefulComponent from './components/stateful-component';
import StatelessComponent from './components/stateless-component';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        Application
        <StatefulComponent />
        <StatelessComponent />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
