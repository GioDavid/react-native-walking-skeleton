import 'react-native';
import React from 'react';
import Products from '../src/components/Products';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders component products correctly', () => {
  const product = renderer.create(<Products />).toJSON();
  expect(product).toBeTruthy();
});
