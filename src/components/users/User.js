// import { Button } from '@mui/material';
import React from 'react';

const User = ({ user }) => {
  return (
    // <Button size='small'>
    <div className='user flex item-center'>
      <div className='user__avatar'>Avatar</div>
      <div className='user__name'>Humayoon Muhammadi</div>
    </div>
    // </Button>
  );
};

export default User;
