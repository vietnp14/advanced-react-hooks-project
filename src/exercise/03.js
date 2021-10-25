// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext
const CountContext = React.createContext();

const CountProvider = (props) => {
  const [count, setCount] = React.useState(0);
  return <CountContext.Provider value={{ count, setCount }} {...props} />
}

const useCount = () => {
  const countContext = React.useContext(CountContext);
  console.log('Count Context : ', countContext);
  // if (!countContext) {
  //   throw new Error(`Can't get Count Context`);
  // }
  return countContext;
}

const CountDisplay = () => {
  const { count } = useCount();
  return <div>{`The current count is ${count}`}</div>
}

const Counter = () => {
  const { setCount } = useCount();
  const increment = () => setCount(c => c + 1)
  const count = React.useContext(CountContext);
  return <button onClick={increment}>{`Increment count: ${count}`}</button>
}

const CountSpan = () => {
  const count = React.useContext(CountContext);
  const useC = useCount();
  console.log('Span useCount : ', useC);
  return <span>{count}</span>;
}

function App() {
  
  return (
    <div>
      <CountSpan />
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
