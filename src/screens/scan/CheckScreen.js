import React from 'react';
import { Container, Content } from 'native-base';
import { arrayOf, shape, string, bool } from 'prop-types';

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
              needRecord: bool
            }).isRequired
          ).isRequired
        }).isRequired
      }).isRequired
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
          />
        </Content>
      </Container>
    );
  }
}

export default CheckScreen;
