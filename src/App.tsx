import React from 'react';

/* import SignUp from './pages/SignUp/index';
 */
import SignIn from './pages/SignIn/index';
import GlobalStyle from './styles/global';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <GlobalStyle />
  </>
);

export default App;
