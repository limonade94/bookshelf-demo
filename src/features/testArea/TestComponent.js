import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './testActions';

const mapStateToProps = (state) => ({
  data: state.test.data // 'test' is from 'test: testReducer'
});

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
}

class TestComponent extends Component {
  render() {
    const { data, incrementCounter, decrementCounter } = this.props;
    return (
      <div className="outer">
        TestComponent : {data}
        <div>
          <button type="button" onClick={incrementCounter}>+</button>
          <button type="button" onClick={decrementCounter}>-</button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
