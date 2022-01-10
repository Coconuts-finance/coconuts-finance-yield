import React from 'react';
import AirdropDetails from './components/AirdropDetails/AirdropDetails';
import Disclaimer from 'components/Disclaimer/Disclaimer';

export default function AirdropPage(props) {
  return (
    <>
      <Disclaimer />
      <AirdropDetails />
    </>
  );
}
