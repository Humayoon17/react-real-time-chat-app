import React from 'react';
import ChatInput from './ChatInput';

const Chat = () => {
  return (
    <section className='chat'>
      <div className='chat__header'>Header</div>
      <div className='chat__message'>
        <div className='chat__message__chats'>Chats</div>
        <ChatInput />
      </div>
    </section>
  );
};

export default Chat;
