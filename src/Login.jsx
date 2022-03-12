import React, { useReducer } from 'react';
import fakeLogin from './fakeLogin';

const initialState = {
  username: '',
  password: '',
  isLoading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'beforeLogin':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'success':
      return {
        ...state,
        username: '',
        password: '',
        isLoading: false,
      };
    case 'error':
      return {
        ...state,
        error: 'Sorry! There was an error logging you in.',
        password: '',
        isLoading: false,
      };
    case 'updateField':
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
}

export default function Login() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleLogin(e) {
    e.preventDefault();

    dispatch({ type: 'beforeLogin' });

    fakeLogin(state.username, state.password)
      .then(response => {
        alert('Logged in successfully');
        dispatch({ type: 'success' });
      })
      .catch(error => {
        dispatch({ type: 'error' });
      });
  }

  return (
    <form action="#" method="POST" onSubmit={handleLogin}>
      {state.error && <p className="error">{state.error}</p>}
      <div className="form-input">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="input"
          id="username"
          value={state.username}
          onChange={e =>
            dispatch({
              type: 'updateField',
              field: 'username',
              value: e.target.value,
            })
          }
        />
      </div>
      <div className="form-input">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="input"
          value={state.password}
          onChange={e =>
            dispatch({
              type: 'updateField',
              field: 'password',
              value: e.target.value,
            })
          }
        />
      </div>
      <div className="form-input">
        <button className="button">Login</button>
        {state.isLoading && <span>Loading...</span>}
      </div>
    </form>
  );
}
