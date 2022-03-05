import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function openNewTransactionModalHandler() {
    setIsNewTransactionModalOpen(true);
  }

  function closeNewTransactionModalHandler() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={openNewTransactionModalHandler} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={closeNewTransactionModalHandler}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
