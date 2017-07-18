import React, { Component } from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text
} from 'native-base';

export default class InlineLabelExample extends Component {
  state = {
    email: '',
    password: ''
  };

  login = () => {
    // Todo
    // dispatch a login action
  };

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item inlineLabel>
              <Label>邮箱</Label>
              <Input onChangeText={email => this.setState({ email })} />
            </Item>
            <Item inlineLabel last>
              <Label>密码</Label>
              <Input
                secureTextEntry
                onChangeText={password => this.setState({ password })}
              />
            </Item>
          </Form>
          <Button
            success
            block
            onPress={this.login}
            disabled={this.state.email === '' || this.state.password === ''}
          >
            <Text>登录</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
