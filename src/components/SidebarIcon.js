import { Avatar } from '@mui/material';
import { IconButton } from '@mui/material';
import React from 'react';
import Logo from '../assets/images/logo.jpg';
import AvatarImage from '../assets/images/avatar.jpg';

const SidebarIcon = () => {
  return (
    <section className='sidebar-icon'>
      <div className='sidebar-icon__icon'>
        <IconButton
          color='primary'
          aria-label='upload picture'
          component='span'
        >
          <Avatar src={Logo} />
        </IconButton>
      </div>

      <div className='sidebar-icon__profile'>
        <IconButton
          color='primary'
          aria-label='upload picture'
          component='span'
        >
          <Avatar src={AvatarImage} about='Humayoon Muhammadi' />
        </IconButton>
      </div>
    </section>
  );
};

export default SidebarIcon;
