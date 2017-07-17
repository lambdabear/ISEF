import React, { Component } from 'react';
import { StyleSheet, View, Image, ToastAndroid } from 'react-native';
import { shape, func } from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import Camera from 'react-native-camera';

import screenStyles from '../screenStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    marginBottom: 10
    // backgroundColor: 'white',
    // borderRadius: 5,
    // color: 'white'
    // padding: 10,
    // margin: 40
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-between',
    marginBottom: 10
  }
});

export default class CameraScreen extends Component {
  static navigationOptions = {
    title: '拍照',
    headerStyle: screenStyles.headerStyle,
    headerTitleStyle: screenStyles.headerTitleStyle
  };

  static propTypes = {
    navigation: shape({
      goBack: func.isRequired
    }).isRequired
  };

  state = {
    imagePath: '',
    isTaken: false
  };

  takePicture = () => {
    const options = { jpegQuality: 50 };
    // options.location = ...
    this.camera
      .capture({ metadata: options })
      .then(data => {
        this.setState({ imagePath: data.path, isTaken: true });
      })
      .catch(err =>
        ToastAndroid.show(err, ToastAndroid.SHORT, ToastAndroid.CENTER)
      );
  };

  confirm = () => {
    // TODO
    // dispatch a action, save the image's path to redux state
    this.props.navigation.goBack();
  };

  cancel = () => {
    this.setState({
      imagePath: '',
      isTaken: false
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {!this.state.isTaken
          ? <Camera
              ref={cam => {
                this.camera = cam;
              }}
              captureTarget={Camera.constants.CaptureTarget.disk}
              mirrorImage={false}
              captureQuality="medium"
              style={styles.preview}
              aspect={Camera.constants.Aspect.fill}
            >
              <Icon
                name="ios-radio-button-on"
                size={50}
                color="white"
                style={styles.capture}
                onPress={this.takePicture}
              />
            </Camera>
          : <Image
              style={styles.preview}
              source={{ uri: this.state.imagePath }}
            >
              <View style={styles.buttonContainer}>
                <Icon
                  name="ios-close-circle-outline"
                  size={50}
                  color="orange"
                  onPress={this.cancel}
                />
                <Icon
                  name="ios-checkmark-circle-outline"
                  size={50}
                  color="green"
                  onPress={this.confirm}
                />
              </View>
            </Image>}
      </View>
    );
  }
}
