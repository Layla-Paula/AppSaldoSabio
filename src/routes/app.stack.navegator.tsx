import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import FinanceScreen from "../screens/finance/financeScreen";
import FinanceHistoricScreen from "../screens/financeHistoric/financeHistoricScreen";
import BudgetScreen from "../screens/budget/budgetScreen";
import CreateBudgetScreen from "../screens/create-budget/createBudgetScreen";
import CreateDebtScreen from "../screens/create-debt/createDebtScreen";
import DebtScreen from "../screens/debt/debtScreen";
import CategoryScreen from '../screens/category/categoryScreen';
import Profile from '../screens/profile/profileScreen';


const Stack = createNativeStackNavigator();

function AppStackNavigator() {
  return (
    <Stack.Navigator screenOptions = {{ headerShown: false}}>
          <Stack.Screen 
            name="FinanceScreen" 
            component={FinanceScreen} 
            options={{ headerShown: false, }} 
            />
          <Stack.Screen 
            name="FinanceHistoricScreen" 
            component={FinanceHistoricScreen} 
            options={{ headerShown: false, }} />
            <Stack.Screen 
            name="BudgetScreen" 
            component={BudgetScreen} 
            options={{ headerShown: false, }} />
            <Stack.Screen 
            name="CreateBudgetScreen" 
            component={CreateBudgetScreen} 
            options={{ headerShown: false, }} />
            <Stack.Screen 
            name="CategoryScreen" 
            component={CategoryScreen} 
            options={{ headerShown: false, }} />
          <Stack.Screen 
            name="DebtScreen" 
            component={DebtScreen} 
            options={{ headerShown: false, }} />
            <Stack.Screen 
            name="CreateDebtScreen" 
            component={CreateDebtScreen} 
            options={{ headerShown: false, }} />
           

    </Stack.Navigator> 
  );
}

export default AppStackNavigator;