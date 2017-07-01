import React, { Component } from 'react';
import { StyleSheet, Platform, TextInput } from 'react-native';
import { Content, Button, Text } from 'native-base';
import { string, func } from 'prop-types';

const IsIOS = Platform.OS === 'ios';
const styles = StyleSheet.create({
  textInput: {
    paddingLeft: 5,
    paddingBottom: 5,
    borderColor: 'gray',
    fontSize: 18,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: IsIOS ? 4 : 0
  }
});

export default class Record extends Component {
  static propTypes = {
    id: string.isRequired,
    record: string.isRequired,
    goBack: func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { text: props.record };
  }

  render() {
    return (
      <Content>
        <TextInput
          style={styles.textInput}
          editable
          maxLength={200}
          underlineColorAndroid="transparent"
          textAlignVertical={'top'}
          multiline
          numberOfLines={12}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Button
          block
          info
          onPress={() => {
            this.props.goBack();
            // Todo, dispatch an action to save input to redux state
          }}
        >
          <Text>确定</Text>
        </Button>
      </Content>
    );
  }
}
