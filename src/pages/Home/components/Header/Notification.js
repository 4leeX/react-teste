import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import { Bell } from 'react-feather';

import { getNotifications } from '../../../../actions/notificationActions';

function Notification() {
  const account = useSelector((state) => state.account);
  const isAuthenticated = !!account.user;
  const notifications = useSelector((state) => state.notifications);
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);

  console.log(notifications);

  return (
    isAuthenticated && (
      <>
        <IconButton ref={ref} onClick={handleOpen}>
          <SvgIcon>
            <Bell />
          </SvgIcon>
        </IconButton>

        <Popover
          onClose={handleClose}
          open={isOpen}
          anchorEl={ref.current}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          The content of the Popover.
        </Popover>
      </>
    )
  );
}

export default Notification;
