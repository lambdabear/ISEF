import React from 'react';
import { ListItem, Text, Body, List, CheckBox } from 'native-base';
import { string, arrayOf, shape, bool } from 'prop-types';

const FacilityList = ({ facilities }) =>
  <List>
    {facilities.map(facility =>
      <ListItem key={facility.id}>
        <CheckBox checked={facility.checked} color="green" />
        <Body>
          <Text note>{facility.name}</Text>
        </Body>
      </ListItem>
    )}
  </List>;

FacilityList.propTypes = {
  facilities: arrayOf(
    shape({
      id: string.isRequired,
      name: string.isRequired,
      checked: bool.isRequired
    })
  ).isRequired
};

export default FacilityList;
