import React from 'react';
import { UserGeo } from '../types';

interface UserMapProps {
  userLocation: UserGeo;
}

export const UserMap = ({ userLocation: { lat, lng } }: UserMapProps) => {
  return (
    <div>
      <h2>Location</h2>
      <p>Latitude: {lat}</p>
      <p>Longitude: {lng}</p>
    </div>
  );
};
