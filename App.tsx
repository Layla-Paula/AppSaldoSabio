import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import BudgetsProvider from './src/contexts/budgetsContext';
import FinancesProvider from './src/contexts/financesContext';
import ThemeProvider from './src/contexts/themeContext';
import Routes from './src/routes';
import * as Updates from 'expo-updates';
import DebtsProvider from './src/contexts/debtsContext';
import AuthProvider from './src/contexts/auth';
import 'react-native-gesture-handler';

export default function App() {

  React.useEffect(() => {
    updateApp()
  }, [])

  const updateApp = async () => {
    try {
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (err) {
      console.error('Error App.tsx:', err);
    }
  }

  return (
    <NavigationContainer>
    <AuthProvider>
      <ThemeProvider>
        <FinancesProvider>
          <DebtsProvider>
            <BudgetsProvider>
             
                <Routes />
                <StatusBar backgroundColor='#051037' style='light' />
              
            </BudgetsProvider>
          </DebtsProvider>
        </FinancesProvider>
      </ThemeProvider>
    </AuthProvider>
    </NavigationContainer>
   
  );
}
