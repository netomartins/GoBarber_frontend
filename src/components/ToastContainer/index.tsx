import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast type="info">
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>
          <span>Não foi possivel fazer login na aplicação</span>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="sucess">
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>
          <span>Não foi possivel fazer login na aplicação</span>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="error">
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>
          <span>Não foi possivel fazer login na aplicação</span>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
