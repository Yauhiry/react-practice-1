import React from 'react';
import { UserCompany } from '../types';

interface FooterProps {
  userCompany: UserCompany;
}

export const Footer = ({
  userCompany: { name, catchPhrase, bs },
}: FooterProps) => {
  return (
    <footer>
      <h2>Company</h2>
      <p>Company: {name}</p>
      <p>Catch phrase: {catchPhrase}</p>
      <p>Bs: {bs}</p>
    </footer>
  );
};
