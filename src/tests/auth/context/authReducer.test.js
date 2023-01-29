import { describe, test, expect } from 'vitest';
import { authReducer } from '../../../auth/context';
import types from '../../../auth/types';

describe('Tests on authReducer', () => {
  const initialState = {
    logged: false,
  };

  const defaultUsername = 'Pablo Rodríguez';

  test('Must be return the default state', () => {
    const state = authReducer(initialState, {});

    expect(state).toEqual(initialState);
  });

  test('Must call login, authenticate and set the user', () => {
    const payload = {
      id: new Date().getTime(),
      name: defaultUsername,
    };

    const action = {
      type: types.login,
      payload,
    };

    const state = authReducer(initialState, action);

    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test('Must call logout, clear the username and set to false the logged property', () => {
    const state = {
      logged: true,
      user: {
        id: new Date().getTime(),
        name: defaultUsername,
      },
    };

    const action = {
      type: types.logout,
    };

    const newState = authReducer(state, action);

    expect(newState).toEqual({
      logged: false,
      user: null,
    });
  });
});
