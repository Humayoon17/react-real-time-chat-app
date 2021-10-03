import React from 'react';
import UserList from './users/UserList';

const SidebarUser = () => {
  return (
    <section className='sidebar-users'>
      <div className='sidebar-users__title'>
          Users
      </div>
      <UserList />
    </section>
  );
};

export default SidebarUser;
