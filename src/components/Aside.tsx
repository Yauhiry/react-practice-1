import React from 'react';
import { UserAddress } from '../types';

interface AsideProps {
  userAddress: Omit<UserAddress, 'geo'>;
}

export const Aside = ({
  userAddress: { street, suite, city, zipcode },
}: AsideProps) => {
  return (
    <aside>
      <h2>Adress</h2>
      <p>
        Address: {street} street {suite}
      </p>
      <p>City: {city}</p>
      <p>Zipcode: {zipcode}</p>
    </aside>
  );
};
