import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import OneSignal from 'react-onesignal';
import GlobalStyle from './styles/global';
import AppProvider from './hooks';

import Routes from './routes';

// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
  OneSignal.init({
    appId: '0e813df9-b2c9-487c-8fd3-1e4a145e8425',
  });
}, []);

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </Router>
);

export default App;
