import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { string } from 'prop-types';

import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';

const IsIOS = Platform.OS === 'ios';
const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 8
  },
  textInput: {
    paddingLeft: 5,
    paddingBottom: 5,
    fontSize: 15,
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 0,
    borderRadius: IsIOS ? 4 : 0
  }
});

const Record = ({ id }) =>
  <AutoGrowingTextInput
    style={styles.textInput}
    placeholder={'检测记录'}
    onChange={event => {
      // Todo, dispatch an action include id for saving user's input text
    }}
  />;

Record.propTypes = {
  id: string.isRequired
};

export default Record;
