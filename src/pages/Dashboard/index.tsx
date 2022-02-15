import React from 'react';
import { FiPower } from 'react-icons/fi';
import { Container, Header, HeaderContent, Profile } from './style';

import logoimg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/Auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoimg} alt="GoBarber" />
          <Profile>
            <img
              src="https://avatars.githubusercontent.com/u/20827326?v=4"
              alt="Neto Martins"
            />
            <div>
              <span>Bem vindo,</span>
              <strong>Neto Martins</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
