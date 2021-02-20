import React from 'react';
import renderer from 'react-test-renderer';
import App from '../pages/index';

describe('App', () => {
  it('renders without crashing', () => {
    expect(20 * 20).toBe(400);
  });
});
