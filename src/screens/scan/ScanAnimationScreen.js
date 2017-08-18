import React from 'react';
import { Text, View } from 'react-native';
import { func, shape, string } from 'prop-types';
import NFC from 'react-native-nfc';

import screenStyles from '../screenStyles';
import ScanAnimation from '../../components/ScanAnimation';
import KeyboardNFCReader from '../../components/KeyboardNFCReader';

class ScanAnimationScreen extends React.Component {
  static navigationOptions = {
    title: '设施检测',
    headerStyle: screenStyles.headerStyle,
    headerTitleStyle: screenStyles.headerTitleStyle
  };

  static propTypes = {
    screenProps: shape({ currentRouteName: string.isRequired }).isRequired,
    navigation: shape({
      navigate: func.isRequired
    }).isRequired
  };

  state = {
    facilityInfo: 'none', // state in 'none' 'inTask' 'notInTask' 'notInDatabase'
    tagInfo: '',
    NdefMessages: ''
  };

  componentDidMount() {
    this.bindNfcListener();
  }

  // getFacilityInfo = rfidTag => {
  //   // Todo, return facility info, maybe promise
  // };

  bindNfcListener = () => {
    NFC.addListener(payload => {
      switch (payload.type) {
        case 'TAG': {
          const info = JSON.stringify(payload);
          this.setState(prestate => ({
            ...prestate,
            tagInfo: info,
            NdefMessages: ''
          }));
          break;
        }
        case 'NDEF': {
          const info = JSON.stringify(payload);
          this.setState(prestate => ({
            ...prestate,
            NdefMessages: info
          }));
          break;
        }
        default:
      }
    });
  };

  scanRFID = () => {
    // Todo, return RFID tag info, maybe promise
  };

  updateFacilityState = () => {
    // Todo, maybe use async, process like
    // this.setState(this.getFacilityInfo(this.scanRFID()));
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ScanAnimation />
        <View>
          <Text
            style={{ fontSize: 16 }}
            onPress={() => this.props.navigation.navigate('Check')}
          >
            请将手机靠近NFC标签
          </Text>
          {this.props.screenProps.currentRouteName === 'ScanHome' &&
            <KeyboardNFCReader
              getTagInfo={tagInfo => {
                this.setState({ tagInfo });
              }}
            />}
          <Text>
            {this.state.tagInfo}
          </Text>
          <Text>
            {this.state.NdefMessages}
          </Text>
          <Text>
            {this.props.screenProps.currentRouteName}
          </Text>
        </View>
      </View>
    );
  }
}

export default ScanAnimationScreen;
