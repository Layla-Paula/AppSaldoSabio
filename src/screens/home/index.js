import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';
import Header from '../../components/header';
import { ListBalance } from './styles1';
import api from '../../services/api';
import { format } from 'date-fns';
import BalanceItem from '../../components/balanceItem';
import HomeBudget from '../../components/home/home-budget';
import HomeDebts from '../../components/home/home-debts';
import HomeFinanceHistoric from '../../components/home/home-finance-historic';
import HomeHeader from '../../components/home/home-header';
import { ThemeContext } from '../../contexts/themeContext';
import { styles } from './styles';

const Home = () => {
  const { user } = useContext(AuthContext);
  const [listBalance, setListBalance] = useState([]);
  const { theme } = useContext(ThemeContext);
  const style = styles(theme);
  const isFocused = useIsFocused();
  const [dateMovements, setDateMovements] = useState(new Date());

  useEffect(() => {
    let isActive = true;

    async function getMovements() {
      console.log('Componente Home renderizado');
      try {
        const dateFormated = format(dateMovements, 'dd/MM/yyyy');

        const balance = await api.get('/balance', {
          params: {
            date: dateFormated,
          },
        });

        if (isActive) {
          setListBalance(balance.data);
          console.log('Balance Data:', balance.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getMovements();

    return () => {
      isActive = false; // Atualizacao de estado
    };
  }, [isFocused, dateMovements]);

  function filterDateMovements(dateSelected) {
    console.log(dateSelected);
    setDateMovements(dateSelected);
  }

  return (
    <SafeAreaView style={style.container}>
      <Header title={user?.name} />
      <ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.tag}
        renderItem={({ item }) => <BalanceItem data={item} />}
      />

      <HomeHeader />
      <ScrollView style={style.containerScroll}>
        <HomeFinanceHistoric />
        <HomeBudget />
        <HomeDebts />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
