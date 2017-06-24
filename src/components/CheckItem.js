import React from 'react';
import {
  Card,
  CardItem,
  Left,
  Right,
  Icon,
  Body,
  Text,
  CheckBox,
  Content
} from 'native-base';
import { string, bool } from 'prop-types';

import Record from './Record';

const NoRecordItem = ({ id, content, checkState }) =>
  <Content>
    <CardItem>
      <Left>
        <Icon name="ios-clipboard-outline" />
        <Body>
          <Text>
            {content}
          </Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem>
      <Left>
        <Icon
          name="ios-camera-outline"
          onPress={() => {
            // todo, use camera to take photo,
            // save the img file src to the var with id;
          }}
        />
        <Text style={{ color: 'green' }}>合格</Text>
        <CheckBox
          color="green"
          checked={checkState === 'qualified'}
          onPress={() => {
            // todo, dispatch an action to change
            // the checkState with id to 'qualified';
          }}
        />
        <Text style={{ color: 'red' }}>{'    '}不合格</Text>
        <CheckBox
          color="red"
          checked={checkState === 'unqualified'}
          onPress={() => {
            // todo, dispatch an action to change
            // the checkState with id to 'unqualified';
          }}
        />
      </Left>
      <Right>
        <Icon
          name="create"
          onPress={() => {
            // todo, dispatch an action to change
            // the needRecord state with id to true;
          }}
        />
      </Right>
    </CardItem>
  </Content>;

NoRecordItem.propTypes = {
  id: string.isRequired,
  content: string.isRequired,
  checkState: string.isRequired
};

const CheckItem = ({ id, content, checkState, needRecord }) =>
  needRecord
    ? <Card>
        <NoRecordItem id={id} content={content} checkState={checkState} />
        <CardItem><Record id={id} /></CardItem>
      </Card>
    : <Card>
        <NoRecordItem id={id} content={content} checkState={checkState} />
      </Card>;

CheckItem.propTypes = {
  id: string.isRequired,
  content: string.isRequired,
  checkState: string.isRequired,
  needRecord: bool
};

CheckItem.defaultProps = {
  needRecord: false
};

export default CheckItem;
