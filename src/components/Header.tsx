import React from 'react';
import { User } from '../types';

interface HeaderProps {
  userInfo: Pick<User, 'name' | 'username' | 'email'>;
}

export const Header = ({
  userInfo: { name, username, email },
}: HeaderProps) => {
  return (
    <header>
      <h2>User Info</h2>
      <p>Name: {name}</p>
      <p>User name: {username}</p>
      <p>Email: {email}</p>
    </header>
  );
};
