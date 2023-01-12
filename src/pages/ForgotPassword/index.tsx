/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import React, { useRef, useCallback, useState } from 'react';
import { FiArrowLeft, FiMail } from 'react-icons/fi';
import * as Yup from 'yup';
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErros';
import { useToast } from '../../hooks/Toast';

import logoimg from '../../assets/logo.svg';
import { Container, Content, AnimationContainer, Background } from './style';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

interface ForgotPasswordData {
  email: string;

}

const ForgotPassword: React.FC = () => {

  const [loading, setLoading] = useState(false)



  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();



  const handleSubmit = useCallback(async (data: ForgotPasswordData) => {
    try {

      setLoading(true);

      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um email válido'),

      });
      await schema.validate(data, {
        abortEarly: false,
      });

      /* recuperação de senha */


      await api.post('/password/forgot', {
        email: data.email,
      })
      addToast({
        type: 'success',
        title: 'E-mail de recuperação enviado',
        description: 'Enviamos um email para recuperação de senha'
      })



      /*  history.push('/dashboard'); */
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err as Yup.ValidationError);
        formRef.current?.setErrors(errors);
        return;
      }

      addToast({
        type: 'error',
        title: 'Erro na recuperação de senha',
        description: 'Ocorreu um erro ao tentar fazer a recuperação de senha',
      });
    }

    finally {
      setLoading(false);
    }

  }, [addToast]);

  return (
    <Container>
      <Content>
        <AnimationContainer>

          <img src={logoimg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>

            <h1>Recuperar senha</h1>
            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Button loading={loading} type="submit">Recuperar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar ao Login
          </Link>

        </AnimationContainer>
      </Content>

      <Background />

    </Container>

  );
};
export default ForgotPassword;

