import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';

import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: INewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  const { createTransaction } = useTransactions();

  async function createNewTransactionHandler(event: FormEvent) {
    event.preventDefault();

    await createTransaction({ title, amount, category, type });

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');

    onRequestClose();
  }

  return (
    <Modal
      className='react-modal-content'
      overlayClassName='react-modal-overlay'
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button
        className='react-modal-close'
        type='button'
        onClick={onRequestClose}
      >
        <img src={closeImg} alt='Fechar modal' />
      </button>
      <Container onSubmit={createNewTransactionHandler}>
        <h2>Cadastrar transação</h2>
        <input
          type='text'
          placeholder='Título'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type='number'
          placeholder='Valor'
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />
        <TransactionTypeContainer>
          <RadioBox
            type='button'
            activeColor='green'
            isActive={type === 'deposit'}
            onClick={() => setType('deposit')}
          >
            <img src={incomeImg} alt='Entrada' />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type='button'
            activeColor='red'
            isActive={type === 'withdraw'}
            onClick={() => setType('withdraw')}
          >
            <img src={outcomeImg} alt='Saída' />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          type='text'
          placeholder='Categoria'
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
}
