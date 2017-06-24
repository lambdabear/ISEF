import React from 'react';
import { Content, Button, Text } from 'native-base';
import { arrayOf, shape, string } from 'prop-types';

import CheckItem from './CheckItem';

const CheckList = ({ checkList }) =>
  <Content>
    {checkList.map(checkItem =>
      <CheckItem
        key={checkItem.id}
        id={checkItem.id}
        content={checkItem.content}
        checkState={checkItem.checkState}
        needRecord={checkItem.needRecord}
      />
    )}
    <Button block success>
      <Text>提交报告</Text>
    </Button>
  </Content>;

CheckList.propTypes = {
  checkList: arrayOf(
    shape({
      id: string.isRequired,
      content: string.isRequired,
      checkState: string.isRequired
    }).isRequired
  ).isRequired
};

export default CheckList;
