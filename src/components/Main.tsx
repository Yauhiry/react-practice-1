import React from 'react';
import { UserMap } from './UserMap';
import { UserGeo } from '../types';

interface MainProps {
  userLocation: UserGeo;
}

export const Main = ({ userLocation }: MainProps) => {
  return (
    <div>
      <UserMap userLocation={userLocation} />
    </div>
  );
};
