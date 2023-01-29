import { describe, test, expect } from 'vitest';
import types from '../../../auth/types';
import {} from 'vitest';

describe('Tests on types', () => {
  test('Must return these types', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout',
    });
  });
});
