import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ex01 from './screens/week2/Ex01';
import Ex02 from './screens/week2/Ex02';
import Ex03 from './screens/week2/Ex03';
import Ex04 from './screens/week2/Ex04';
import Ex05 from './screens/week2/Ex05';
import Ex06 from './screens/week2/Ex06';
import Ex07 from './screens/week2/Ex07';
import Ex08 from './screens/week2/Ex08';
import Ex09 from './screens/week2/Ex09';
import Ex10 from './screens/week2/Ex10';
import Ex11 from './screens/week2/Ex11';
import Ex12 from './screens/week2/Ex12';
import Travel from './screens/week3/Travel';
import Resort from './screens/week4/Resort';
import Health from './screens/week5/Health';
import Home from './screens/week6/Home';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './navigations/HomeStack';
import BottomTab from './navigations/BottomTab';
import RootStack from './navigations/RootStack';
import { AuthContextProvider } from './hooks/AuthContextProvider';
export default function App() {
  return (

    // <Travel />
    //<Resort />
    //<Health />
    //<Home />
    <AuthContextProvider>
    <NavigationContainer>
      {/* <HomeStack /> */}
      {/* <BottomTab /> */}
      <RootStack />
    </NavigationContainer>
    </AuthContextProvider>
  );
}
