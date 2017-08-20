import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { func, string } from 'prop-types';
import UsbSerial from 'react-native-usbserial';

const styles = StyleSheet.create({
  textInput: {
    display: 'none'
  },
  prompt: {
    color: 'green',
    textAlign: 'center'
  }
});

async function getDeviceAsync(usbs, getDevicesInfo) {
  try {
    const deviceList = await usbs.getDeviceListAsync();
    const devicesInfo =
      deviceList === null || deviceList.length === 0 ? 'empty' : deviceList[0];
    const vendorID = devicesInfo.vendorId
      ? devicesInfo.vendorId.toString()
      : 'empty';
    const productID = devicesInfo.productId
      ? devicesInfo.productId.toString()
      : 'empty';
    getDevicesInfo({ vendorID, productID });
  } catch (err) {
    getDevicesInfo({ vendorID: 'empty', productID: 'empty' });
  }
}

export default class KeyboardNFCReader extends React.Component {
  static propTypes = {
    getTagInfo: func.isRequired,
    vendorID: string.isRequired,
    productID: string.isRequired
  };

  state = {
    tagInfo: '',
    USBDeviceInfo: { vendorID: 'empty', productID: 'empty' }
  };

  componentDidMount() {
    this.setUSBDeviceInfo();
    this.detectUSBDevice = setInterval(this.setUSBDeviceInfo, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.detectUSBDevice);
  }

  getUSBDeviceInfo = getDevicesInfo => {
    const usbs = new UsbSerial();
    getDeviceAsync(usbs, getDevicesInfo);
  };

  setUSBDeviceInfo = () => {
    this.getUSBDeviceInfo(deviceInfo => {
      this.setState(prestate => ({ ...prestate, USBDeviceInfo: deviceInfo }));
    });
  };

  inputs = {};

  render() {
    return (
      <View>
        {this.state.USBDeviceInfo.vendorID === this.props.vendorID &&
          this.state.USBDeviceInfo.productID === this.props.productID &&
          <View>
            <Text style={styles.prompt}>正使用外置读卡器...</Text>
            <TextInput
              ref={input => {
                this.inputs.nfcReader = input;
              }}
              style={styles.textInput}
              autoFocus
              caretHidden
              keyboardType={'email-address'}
              onSubmitEditing={() => {
                this.props.getTagInfo(this.state.tagInfo);
                this.setState(prestate => ({ ...prestate, tagInfo: '' }));
                this.inputs.nfcReader.focus();
              }}
              onEndEditing={() => {
                this.inputs.nfcReader.focus();
              }}
              maxLength={200}
              onChangeText={tagInfo =>
                !this.state.getTagID && this.setState({ tagInfo })}
              value={this.state.tagInfo}
            />
          </View>}
      </View>
    );
  }
}
