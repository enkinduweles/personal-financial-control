export function currencyFormatter(data: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(data);
}

export function dateFormatter(data: string) {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(data));
}
