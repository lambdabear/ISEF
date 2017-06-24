import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 200,
    backgroundColor: 'white',
    opacity: 1
  },
  line: { color: 'green', fontWeight: '400' }
});

const line = '______________________';

const ScanAnimation = () =>
  <View style={styles.view}>
    <Animatable.Text
      animation="fadeInUp"
      iterationCount="infinite"
      direction="reverse"
      easing="linear"
      duration={1500}
      style={styles.line}
    >
      {line}
    </Animatable.Text>
    <Animatable.Text
      animation="fadeInDown"
      iterationCount="infinite"
      direction="reverse"
      easing="linear"
      duration={1500}
      style={styles.line}
    >
      {line}
    </Animatable.Text>
  </View>;

export default ScanAnimation;
