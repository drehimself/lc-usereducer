import { useReducer } from 'react';

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
    </div>
  );
}
