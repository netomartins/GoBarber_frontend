/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import React, {useRef, useCallback, useContext} from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErros';
import { AuthContext } from '../../context/AuthContext';

import logoimg from '../../assets/logo.svg';
import { Container, Content, Background } from './style';

import Input from '../../components/Input';
import Button from '../../components/Button';


const SignIn: React.FC = () => {


  const formRef = useRef<FormHandles>(null);

  const { signIn } = useContext(AuthContext);


  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmit = useCallback(async (data: object) => {
    console.log(data);
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um email válido'),
        password: Yup.string().required('Senha obrigatória'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      signIn();
    } catch (err) {
      console.log(err);

      const errors = getValidationErrors(err as Yup.ValidationError);
      formRef.current?.setErrors(errors);
    }
  }, [signIn]);

  return (
    <Container>
      <Content>


        <img src={logoimg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>

          <h1>Faça seu logon</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input name="password" icon={FiLock} placeholder="Senha" />

          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="forgot">
          <FiLogIn />
          Criar conta
        </a>


      </Content>

      <Background />

    </Container>

  );
};
export default SignIn;

