import React, { createContext, useContext, useState, useMemo } from 'react';

export const NetworksContext = createContext(null);

export const networks = [
  /*
  {
    name: 'BSC',
    asset: 'BNB',
    id: '56',
    url: '/#/bsc',
  },
  {
    name: 'HECO',
    asset: 'HT',
    id: '128',
    url: '/#/heco',
  },
  */
  {
    name: 'AVALANCHE',
    asset: 'AVAX',
    id: '43114',
    url: '/#/avax',
  },
  {
    name: 'POLYGON',
    asset: 'POLYGON',
    id: '137',
    url: '/#/polygon',
  },
  /*
  {
    name: 'FANTOM',
    asset: 'FTM',
    id: '250',
    url: '/#/fantom',
  },
  */
];

const NetworksProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const currentNetwork = useMemo(
    () => networks.find(network => parseInt(network.id) === parseInt(window.REACT_APP_NETWORK_ID)),
    []
  );

  return (
    <NetworksContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        networks,
        currentNetwork,
      }}
    >
      {children}
    </NetworksContext.Provider>
  );
};

export const useNetworks = () => {
  const context = useContext(NetworksContext);

  return context;
};

export default NetworksProvider;
