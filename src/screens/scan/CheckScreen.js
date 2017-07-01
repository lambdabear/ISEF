import React from 'react';
import { Container, Content } from 'native-base';
import { arrayOf, shape, string, bool, func } from 'prop-types';

import screenStyles from '../screenStyles';
import CheckList from '../../components/CheckList';

class CheckScreen extends React.Component {
  static navigationOptions = {
    title: '检测详情',
    headerStyle: screenStyles.headerStyle,
    headerTitleStyle: screenStyles.headerTitleStyle
  };

  static propTypes = {
    screenProps: shape({
      scanScreenProps: shape({
        checkProps: shape({
          checkList: arrayOf(
            shape({
              id: string.isRequired,
              content: string.isRequired,
              checkState: string.isRequired,
              needRecord: bool.isRequired,
              record: string.isRequired,
              needPhoto: bool.isRequired
            }).isRequired
          ).isRequired
        }).isRequired
      }).isRequired
    }).isRequired,
    navigation: shape({
      navigate: func.isRequired
    }).isRequired
  };

  render() {
    return (
      <Container>
        <Content>
          <CheckList
            checkList={
              this.props.screenProps.scanScreenProps.checkProps.checkList
            }
            navigate={this.props.navigation.navigate}
          />
        </Content>
      </Container>
    );
  }
}

export default CheckScreen;
