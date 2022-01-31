/* eslint-disable prettier/prettier */
import React from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi';
import logoimg from '../../assets/logo.svg';
import { Container, Content, Background } from './style';

import Input from '../../components/Input';
import Button from '../../components/Button';


const SignUp: React.FC = () => (

  <Container>
    <Background />
    <Content>


      <img src={logoimg} alt="GoBarber" />

      <form>

        <h1>Faça seu Cadastro</h1>
        <Input name="name" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input name="password" icon={FiLock} placeholder="Senha" />

        <Button type="submit">Cadastrar</Button>

      </form>

      <a href="forgot">
        <FiArrowLeft />
        Voltar para logon
      </a>


    </Content>



  </Container>

);

export default SignUp;

