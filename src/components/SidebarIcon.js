import { Avatar } from '@mui/material';
import { IconButton } from '@mui/material';
import React from 'react';
import logo from '../assets/images/logo.jpg';

const SidebarIcon = () => {
  return (
    <section className='sidebar-icon'>
      <div className='sidebar-icon__icon'>App Icon</div>
      <div className='sidebar-icon__profile'>
        <IconButton
          color='primary'
          aria-label='upload picture'
          component='span'
        >
          <Avatar src={logo} />
        </IconButton>
      </div>
    </section>
  );
};

export default SidebarIcon;
