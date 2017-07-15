// import Expo from 'expo';
import React, { Component } from 'react';

import Index from './Index';

// const Roboto = require('native-base/Fonts/Roboto.ttf');
// const Roboto_medium = require('native-base/Fonts/Roboto_medium.ttf'); // eslint-disable-line
// const Ionicons = require('native-base/Fonts/Ionicons.ttf');

export default class Setup extends Component {
  constructor() {
    super();

    this.state = {
      isReady: false
    };
  }

  // async componentWillMount() {
  //   await Expo.Font.loadAsync({
  //     Roboto,
  //     Roboto_medium,
  //     Ionicons
  //   });
  //
  //   this.setState({ isReady: true });
  // }

  render() {
    // if (!this.state.isReady) {
    //   return <Expo.AppLoading />;
    // }

    return <Index />;
  }
}
