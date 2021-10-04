import { Avatar, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import React from 'react';
import AvatarImage from '../assets/images/avatar.jpg';

const ChatInput = () => {
  return (
    <div className='chat__message__input'>
      <div className='chat__input__avatar'>
        <Avatar src={AvatarImage} sx={{ width: 24, height: 24 }} />
      </div>
      <div className='chat__input'>
        <input placeholder='Write message' />
      </div>
      <div className='chat__input__button'>
        <Button
          size='small'
          variant='contained'
          color='success'
          startIcon={<SendIcon />}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
