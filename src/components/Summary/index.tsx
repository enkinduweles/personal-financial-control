import { useTransactions } from '../../hooks/useTransactions';
import { currencyFormatter } from '../../utilities/formatData';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Balance, Container } from './styles';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  const isBalanceNegative = summary.total < 0;

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt='Entradas' />
        </header>
        <strong> {currencyFormatter(summary.deposits)} </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt='Saídas' />
        </header>
        <strong>- {currencyFormatter(summary.withdraws)}</strong>
      </div>
      <Balance isBalanceNegative={isBalanceNegative}>
        <header>
          <p>Total</p>
          <img src={totalImg} alt='Total' />
        </header>
        <strong>{currencyFormatter(summary.total)}</strong>
      </Balance>
    </Container>
  );
}
