import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import App from './App';

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Bolsa de estudo',
          type: 'deposit',
          category: 'salario',
          amount: 4000,
          createdAt: new Date('2022-01-15 08:00:00'),
        },
        {
          id: 2,
          title: 'Compra do mês',
          type: 'withdraw',
          category: 'Mercado',
          amount: 200,
          createdAt: new Date('2022-02-01 10:00:00'),
        },
      ],
    });
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
