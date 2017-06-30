import React from 'react';
import { ListItem, Text, Body, List, CheckBox, Icon } from 'native-base';
import { string, arrayOf, shape, bool } from 'prop-types';

import LoadingAnimation from './LoadingAnimation';

const FacilityList = ({ facilities }) =>
  <List>
    {facilities.map(facility =>
      <ListItem key={facility.id}>
        <CheckBox
          checked={facility.checked}
          color={facility.postSuccess ? 'green' : 'orange'}
        />
        <Body>
          <Text note>{facility.name}</Text>
        </Body>
        {facility.checked &&
          (() => {
            if (facility.uploading) {
              return <LoadingAnimation />;
            }
            if (facility.checked && facility.postSuccess) {
              return (
                <Icon
                  name="ios-cloud-done-outline"
                  style={{ color: 'green' }}
                />
              );
            }
            return (
              <Icon
                name="ios-cloud-upload-outline"
                style={{ color: 'orange' }}
                onPress={() => {
                  // Todo, dispatch an action for posting check result data to server
                }}
              />
            );
          })()}
      </ListItem>
    )}
  </List>;

FacilityList.propTypes = {
  facilities: arrayOf(
    shape({
      id: string.isRequired,
      name: string.isRequired,
      checked: bool.isRequired,
      postSuccess: bool.isRequired, // check result is posted success or not
      uploading: bool.isRequired // check result is uploading now or not
    })
  ).isRequired
};

export default FacilityList;
