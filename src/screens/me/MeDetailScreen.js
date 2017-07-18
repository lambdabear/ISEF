import React from 'react';
import { Container, Content, Button, Text } from 'native-base';
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

  exit = () => {
    // TODO
    // dispatch a action for clean all redux state
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
          <Button
            full
            light
            style={{ backgroundColor: 'white' }}
            onPress={this.exit}
          >
            <Text>退出</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default MeDetailScreen;
