import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import Home from '../screens/home';
import Transactions from '../screens/Transactions';
import FinanceHistoricScreen from "../screens/financeHistoric/financeHistoricScreen";
import BudgetScreen from '../screens/budget/budgetScreen';
import Report from '../screens/Report';
// import FabButton from '../components/ButtonNew/FabButton';
import CustomBottomTab from "../components/bottomTab/custom-bottom-tab";
import Profile from '../screens/profile/profileScreen';

const Tab = createBottomTabNavigator();

function AppTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomBottomTab {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        
      }}
    >

      <Tab.Screen 
      name="Home" 
      component={Home} 
      />

      <Tab.Screen 
      name="Transações" 
      component={FinanceHistoricScreen} 
       />

      <Tab.Screen 
      name="Create" component={Home} 
      options={{ headerShown: false }} />

      <Tab.Screen 
      name="Orçamento" 
      component={BudgetScreen} 
       />

      <Tab.Screen 
      name="Relatório" 
      component={Report} 
     />

  
    </Tab.Navigator>
  );
}

export default AppTabNavigator;
