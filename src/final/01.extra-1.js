// useReducer: simple Counter
// 💯 accept the step as the action
// http://localhost:3000/isolated/final/01.extra-1.js

import * as React from 'react'
import debounce from "lodash.debounce";

const TestFunc = ({ count, onClick }) => {
  const handleClick = debounce(() => {
    onClick();
    console.log(count);
  }, 500);

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Func: {count}
      </button>
    </div>
  );
};

class TestClass extends React.Component {
  handleClick = debounce(() => {
    this.props.onClick();
    console.log(this.props.count);
  }, 500);

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          Class: {this.props.count}
        </button>
      </div>
    );
  }
}

const Usage = () => {
  const [countClass, setCountClass] = React.useState(0);
  const [countFunc, setCountFunc] = React.useState(0);

  return (
    <div>
      <TestFunc count={countFunc} onClick={() => setCountFunc(countFunc + 1)} />
      <TestClass
        count={countClass}
        onClick={() => setCountClass(countClass + 1)}
      />
    </div>
  );
};

export default Usage
