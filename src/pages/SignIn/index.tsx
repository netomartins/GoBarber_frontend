/* eslint-disable prettier/prettier */
import React from 'react';
import { FiLogIn} from 'react-icons/fi';
import logoimg from '../../assets/logo.svg';
import { Container, Content, Background } from './style';


const SignIn: React.FC = () => (

  <Container>
    <Content>


      <img src={logoimg} alt="GoBarber" />

      <form>

        <h1>Faça seu logon</h1>
        <input placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>
        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="forgot">
        <FiLogIn />
        Criar conta
      </a>


    </Content>

    <Background />

  </Container>

);

export default SignIn;

