/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
import React from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web'
import logoimg from '../../assets/logo.svg';
import { Container, Content, Background } from './style';

import Input from '../../components/Input';
import Button from '../../components/Button';


const SignUp: React.FC = () => {

  // eslint-disable-next-line @typescript-eslint/ban-types
  // eslint-disable-next-line react/jsx-no-bind
  function handleSubmit(data: object ): void {
    console.log(data);

  }
  return (

    <Container>
      <Background />
      <Content>


        <img src={logoimg} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>

          <h1>Faça seu Cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input name="password" icon={FiLock} placeholder="Senha" />

          <Button type="submit">Cadastrar</Button>

        </Form>

        <a href="forgot">
          <FiArrowLeft />
          Voltar para logon
        </a>

      </Content>

    </Container>
  );

}

export default SignUp;

