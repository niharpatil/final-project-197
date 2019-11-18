import React from 'react';
import { connect } from 'react-redux';

import { removeTodo } from '../actions/actions';

class TLItem extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.item.taskname}</p>
        <button onClick={() => this.props.removeItem(this.props.item.id)}>
          X
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeItem: itemId => dispatch(removeTodo(itemId))
  };
};

export default connect(null, mapDispatchToProps)(TLItem);
