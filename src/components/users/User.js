import { Avatar, Link } from '@mui/material';
import React from 'react';

const User = ({ user }) => {
  return (
    <div className='user flex item-center'>
      <div className='user__avatar'>
        <Link href='#' underline='none'>
          <Avatar
            alt={user?.firstname + ' ' + user?.lastname}
            src={user?.imageUrl}
            sx={{ width: 25, height: 25 }}
          />
        </Link>
      </div>
      <div className='user__name'>
        {user?.firstname} {user?.lastname}
      </div>
    </div>
  );
};

export default User;
