// import Expo from 'expo';
import React, { Component } from 'react';
import { Container, Header, Title, Body, Content, Icon } from 'native-base';

import Index from './Index';
import Login from './components/Login';

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
    if (!this.state.isReady) {
      return (
        <Container>
          <Content>
            <Header
              androidStatusBarColor="steelblue"
              style={{ backgroundColor: 'steelblue', height: 40 }}
            >
              <Body>
                <Title>消防设施巡检系统</Title>
              </Body>
            </Header>
            <Login />
            {/* TODO change code below to get result from post user info*/}
            <Icon
              name="ios-checkmark-circle-outline"
              onPress={() => {
                this.setState({ isReady: true });
              }}
            />
          </Content>
        </Container>
      );
    }

    return <Index />;
  }
}
