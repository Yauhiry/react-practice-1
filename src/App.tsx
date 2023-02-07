import React from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Aside } from './components/Aside';
import { Footer } from './components/Footer';
import { User } from './types';

export const App = () => {
  const user: User = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };
  return (
    <div>
      <Header
        userInfo={{
          name: user.name,
          username: user.username,
          email: user.email,
        }}
      />
      <Main userLocation={user.address.geo} />
      <Aside userAddress={user.address} />
      <Footer userCompany={user.company} />
    </div>
  );
};
