import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import { Bell } from 'react-feather';

function Notification() {
  return (
    <IconButton>
      <SvgIcon>
        <Bell />
      </SvgIcon>
    </IconButton>
  );
}

export default Notification;
