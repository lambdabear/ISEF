import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

const iconSrc = require('../../assets/icons/ionicons-2.0.1/ios7-refresh-empty.png');

export default class LoadingAnimation extends Component {
  constructor() {
    super();
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear
    }).start(() => this.spin());
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    return (
      <Animated.Image
        style={{
          tintColor: 'orange',
          width: 26,
          height: 26,
          transform: [{ rotate: spin }]
        }}
        active
        source={iconSrc}
      />
    );
  }
}
