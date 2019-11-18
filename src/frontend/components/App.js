import React from 'react';

import { connect } from 'react-redux';

import { getTodos } from '../actions/actions';

import TLActions from './TLActions';
import TLContainer from './TLContainer';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Fetch todos from api server and initialize redux store
    this.props.getTodos();
  }

  render() {
    return (
      <div>
        <h1>Groceries</h1>
        <TLContainer />
        <TLActions />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTodos: () => dispatch(getTodos())
  };
};

export default connect(null, mapDispatchToProps)(App);
