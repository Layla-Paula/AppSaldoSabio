import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome5, Feather, AntDesign, MaterialCommunityIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';
import CustomDrawer from '../components/customDrawer';
import AppStackNavigator from './app.stack.navegator';
import AppTabNavigator from './app.tab.navigator';
import DebtScreen from '../screens/debt/debtScreen';
import CategoryScreen from '../screens/category/categoryScreen';


const AppDrawer = createDrawerNavigator();

function AppDrawerNavigator() {
  return (
    <AppDrawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#F9CD2F',
          paddingTop: 20,
        },
        drawerActiveBackgroundColor: '#0F0F18',
        drawerActiveTintColor: '#FFF',
        drawerInactiveBackgroundColor: '#F9CD2F',
        drawerInactiveTintColor: '#121212',
      }}
    >

      <AppDrawer.Screen
        name="HomeScreen"
        component={AppTabNavigator}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          drawerLabel: "Home",
        }}
      />
      {/*} <AppDrawer.Screen
        name="DebtScreen"
        component={DebtScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="creditcard" size={size} color={color} />
          ),
          drawerLabel: 'Faturas',
        }}
      /> */}
      <AppDrawer.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="category" size={size} color={color} />
          ),
          drawerLabel: "Categorias",
        }}
      />
      <AppDrawer.Screen
        name="FinanceScreen"
        component={AppStackNavigator}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="finance" size={size} color={color} />
          ),
          drawerLabel: "Gastos/Renda",
        }}
      />


    </AppDrawer.Navigator>
  );
}

export default AppDrawerNavigator;

