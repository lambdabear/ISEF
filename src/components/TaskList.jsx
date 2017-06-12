// @flow
import React from 'react';
import { Text } from 'react-native';

function multiply(n: number, m: number): number {
  return n * m;
}

const Mul = () => <Text>{multiply('14', 14)}</Text>;

export default Mul;
