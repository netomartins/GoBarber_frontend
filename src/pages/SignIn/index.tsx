/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import React, { useRef, useCallback, useEffect } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import OneSignal from 'react-onesignal';
import getValidationErrors from '../../utils/getValidationErros';
import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';

import logoimg from '../../assets/logo.svg';
import { Container, Content, AnimationContainer, Background } from './style';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {


  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();


  useEffect(() => {
    OneSignal.init({
      appId: '0e813df9-b2c9-487c-8fd3-1e4a145e8425',
    });
  }, []);

  const handleSubmit = useCallback(async (data: SignInFormData) => {
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

      await signIn({
        email: data.email,
        password: data.password

      });

      history.push('/dashboard');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err as Yup.ValidationError);
        formRef.current?.setErrors(errors);
        return;
      }

      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, cheque suas credenciais',
      });

    }
  }, [signIn, addToast, history]);

  return (
    <Container>
      <Content>
        <AnimationContainer>

          <img src={logoimg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>

            <h1>Faça seu logon</h1>
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input name="password" icon={FiLock} placeholder="Senha" />

            <Button type="submit">Entrar</Button>
            <Link to="/forgot-password">Esqueci minha senha</Link>
          </Form>

          <Link to="/signup">
            <FiLogIn />
            Criar conta
          </Link>

        </AnimationContainer>
      </Content>

      <Background />

    </Container>

  );
};
export default SignIn;

