import React from 'react';
import { connect } from 'react-redux';
import { ADD_TODO_SUCCESS } from '../actions/types';
import { addTodo } from '../actions/actions';

class TLActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
        />
        <button onClick={() => this.props.addItem(this.state.value)}>
          Add Item
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: itemName => dispatch(addTodo(itemName))
  };
};

export default connect(null, mapDispatchToProps)(TLActions);
