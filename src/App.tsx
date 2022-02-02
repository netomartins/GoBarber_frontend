import React from 'react';

/* import SignUp from './pages/SignUp/index';
 */
import SignIn from './pages/SignIn/index';
import GlobalStyle from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
