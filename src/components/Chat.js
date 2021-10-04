import React from 'react';
import ChatInput from './ChatInput';
import AvatarImage from '../assets/images/avatar.jpg';
import { Avatar } from '@mui/material';

const Chat = () => {
  const user = {
    id: 1,
    firstname: 'Humayoon',
    lastname: 'Muhammadi',
    email: 'Humayoon_muhammadi@yahoo.com',
    imageUrl: AvatarImage,
  };

  return (
    <section className='chat'>
      <div className='chat__header'>
        <div className='flex item-center'>
          <div className='chat__user__name'>
            {user?.firstname} {user?.lastname}
          </div>
          <div>
            <Avatar
              alt={user?.firstname + ' ' + user?.lastname}
              src={user?.imageUrl}
              sx={{ width: 30, height: 30 }}
            />
          </div>
        </div>
      </div>
      <div className='chat__message'>
        <div className='chat__message__chats'>Chats</div>
        <ChatInput />
      </div>
    </section>
  );
};

export default Chat;
