import React, { useState } from 'react';
import User from './User';
import AvatarImage from '../../assets/images/avatar.jpg';

const UserList = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstname: 'Humayoon',
      lastname: 'Muhammadi',
      email: 'Humayoon_muhammadi@yahoo.com',
      imageUrl: AvatarImage,
    },

    {
      id: 2,
      firstname: 'Jalil',
      lastname: 'Ahmadi',
      email: 'Humayoon_muhammadi@yahoo.com',
      imageUrl: AvatarImage,
    },

    {
      id: 3,
      firstname: 'Khan',
      lastname: 'Saib',
      email: 'Humayoon_muhammadi@yahoo.com',
      imageUrl: AvatarImage,
    },
  ]);

  return (
    <div className='users-list'>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
