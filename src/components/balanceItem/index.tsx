import React, { useMemo } from 'react';
import { Container, Label, Balance } from './styles';

interface BalanceItemProps {
  data: {
    tag: string;
    saldo: number;
  };
}

interface LabelName {
  label: string;
  color: string;
}

const BalanceItem: React.FC<BalanceItemProps> = ({ data }) => {
  
  const labelName: LabelName = useMemo(() => {
    if (data.tag === 'saldo') {
      return {
        label: 'Saldo Disponível',
        color: '314BCE',
      };
    } else if (data.tag === 'receita') {
      return {
        label: 'Receitas',
        color: '0A8354',
      };
    } else {
      return {
        label: 'Despesas',
        color: 'FF4D12',
      };
    }
  }, [data]);

  return (
    <Container bg={labelName.color}>
      <Label>{labelName.label}</Label>
      <Balance>R$ {data.saldo}</Balance>
    </Container>
  );
};

export default BalanceItem;
