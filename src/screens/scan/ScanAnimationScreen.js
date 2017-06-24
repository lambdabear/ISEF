import React from 'react';
import { Text, View } from 'react-native';
import { func, shape } from 'prop-types';

import screenStyles from '../screenStyles';
import ScanAnimation from '../../components/ScanAnimation';

class ScanAnimationScreen extends React.Component {
  static navigationOptions = {
    title: '设施检测',
    headerStyle: screenStyles.headerStyle,
    headerTitleStyle: screenStyles.headerTitleStyle
  };

  static propTypes = {
    navigation: shape({
      navigate: func.isRequired
    }).isRequired
  };

  state = {
    facilityInfo: 'none' // state in 'none' 'inTask' 'notInTask' 'notInDatabase'
  };

  getFacilityInfo = rfidTag => {
    // todo, return facility info, maybe promise
  };

  scanRFID = () => {
    // todo, return RFID tag info, maybe promise
  };

  updateFacilityState = () => {
    // todo, maybe use async, process like
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
        </View>
      </View>
    );
  }
}

export default ScanAnimationScreen;
