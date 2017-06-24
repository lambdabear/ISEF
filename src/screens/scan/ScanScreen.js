import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { arrayOf, shape, string, bool } from 'prop-types';

import screenStyles from '../screenStyles';
import ScanAnimationScreen from './ScanAnimationScreen';
import CheckScreen from './CheckScreen';

const scanIconSrc = require('../../../assets/icons/ionicons-2.0.1/ios7-barcode.png');

const ScanScreen = StackNavigator({
  ScanHome: { screen: ScanAnimationScreen },
  Check: { screen: CheckScreen }
});

ScanScreen.propTypes = {
  screenProps: shape({
    scanScreenProps: shape({
      checkProps: shape({
        checkList: arrayOf(
          shape({
            id: string.isRequired,
            content: string.isRequired,
            checkState: string.isRequired,
            needRecord: bool
          }).isRequired
        ).isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

const tabBarIcon = ({ tintColor }) =>
  <Image source={scanIconSrc} style={[screenStyles.icon, { tintColor }]} />;

tabBarIcon.propTypes = {
  tintColor: string.isRequired
};

ScanScreen.navigationOptions = {
  tabBarLabel: '检测',
  tabBarIcon
};

export default ScanScreen;
