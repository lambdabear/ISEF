import React from 'react';
import { Content, Button, Text } from 'native-base';
import { arrayOf, shape, string, func, bool } from 'prop-types';

import CheckItem from './CheckItem';

const CheckList = ({ checkList, navigate }) =>
  <Content>
    {checkList.map(checkItem =>
      <CheckItem
        key={checkItem.id}
        id={checkItem.id}
        content={checkItem.content}
        checkState={checkItem.checkState}
        needRecord={checkItem.needRecord}
        record={checkItem.record}
        needPhoto={checkItem.needPhoto}
        navigate={navigate}
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
      checkState: string.isRequired,
      needRecord: bool.isRequired,
      record: string.isRequired,
      needPhoto: bool.isRequired
    }).isRequired
  ).isRequired,
  navigate: func.isRequired
};

export default CheckList;
