import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;

  div {
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    background: var(--shape);
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
  }
`;

interface BalanceProps {
  children: ReactNode;
  isBalanceNegative: boolean;
}

const balanceStyles = css`
  background: #e52e4d !important;
  color: #fff !important;
`;

export const Balance = styled.div<BalanceProps>`
  background: #33cc95 !important;

  ${({ isBalanceNegative }) => (isBalanceNegative ? balanceStyles : null)};
`;
