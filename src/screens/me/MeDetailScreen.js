import React from 'react';
import { Container, Content } from 'native-base';
import { shape, string } from 'prop-types';

import screenStyles from '../screenStyles';
import Profile from '../../components/Profile';

class MeDetailScreen extends React.Component {
  static navigationOptions = {
    title: '我',
    headerStyle: screenStyles.headerStyle,
    headerTitleStyle: screenStyles.headerTitleStyle
  };

  static propTypes = {
    screenProps: shape({
      meScreenProps: shape({
        meDetailProps: shape({
          userInfo: shape({
            name: string,
            email: string.isRequired,
            completeNum: string,
            incompleteNum: string,
            overDueNum: string
          }).isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  };

  render() {
    return (
      <Container>
        <Content>
          <Profile
            userInfo={
              this.props.screenProps.meScreenProps.meDetailProps.userInfo
            }
          />
        </Content>
      </Container>
    );
  }
}

export default MeDetailScreen;
