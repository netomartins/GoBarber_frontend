/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import React, { useRef, useCallback } from 'react';
import { FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErros';
import { useToast } from '../../hooks/Toast';

import logoimg from '../../assets/logo.svg';
import { Container, Content, AnimationContainer, Background } from './style';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
}


const ResetPassword: React.FC = () => {


  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const history = useHistory();

  const location = useLocation();


  const handleSubmit = useCallback(async (data: ResetPasswordFormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({


        password: Yup.string().required('Senha obrigatória'),
        password_confirmation: Yup.string().oneOf(
          [Yup.ref('password'), null],
          'confirmação incorreta',
        ),

      });
      await schema.validate(data, {
        abortEarly: false,
      });

      const { password, password_confirmation } = data;
      const token = location.search.replace('?token=', '');

      await api.post('/password/reset', {
        password,
        password_confirmation,
        token
      })



      history.push('/');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err as Yup.ValidationError);
        formRef.current?.setErrors(errors);
        return;
      }

      addToast({
        type: 'error',
        title: 'Erro ao resetar senha',
        description: 'Ocorreu um erro ao resetar sua senha, tente novamente',
      });

    }
  }, [addToast, history, location]);

  return (
    <Container>
      <Content>
        <AnimationContainer>

          <img src={logoimg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>

            <h1>Resetar senha</h1>
            <Input name="password" icon={FiLock} placeholder="Nova senha" />
            <Input name="password_confirmation" icon={FiLock} placeholder="Confirmação da senha" />

            <Button type="submit">Alterar senha</Button>
            <Link to="/forgot-password">Esqueci minha senha</Link>
          </Form>


        </AnimationContainer>
      </Content>

      <Background />

    </Container>

  );
};
export default ResetPassword;

