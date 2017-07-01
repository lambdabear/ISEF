import React from 'react';
import { Container, Content } from 'native-base';
import { shape, string, func } from 'prop-types';

import screenStyles from '../screenStyles';
import Record from '../../components/Record';

class CheckScreen extends React.Component {
  static navigationOptions = {
    title: '检测记录',
    headerStyle: screenStyles.headerStyle,
    headerTitleStyle: screenStyles.headerTitleStyle
  };

  static propTypes = {
    screenProps: shape({
      scanScreenProps: shape({
        checkRecordProps: shape({
          id: string.isRequired,
          record: string.isRequired
        }).isRequired
      }).isRequired
    }).isRequired,
    navigation: shape({
      goBack: func.isRequired
    }).isRequired
  };

  render() {
    const {
      id,
      record
    } = this.props.screenProps.scanScreenProps.checkRecordProps;
    return (
      <Container>
        <Content>
          <Record
            id={id}
            record={record}
            goBack={this.props.navigation.goBack}
          />
        </Content>
      </Container>
    );
  }
}

export default CheckScreen;
