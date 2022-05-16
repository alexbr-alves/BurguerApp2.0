import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';

import Carrinho from '../telas/Carrinho';
import HomeRotas from './HomeRotas';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
       initialRouteName='Home'
       screenOptions={({route}) => ({
         tabBarIcon: ({ size, color}) => {
           let iconName;
           if(route.name === "Home") {
             iconName ='ios-home'}
           else if (route.name === 'Carrinho') {
             iconName = 'ios-cart-sharp'}  
           return <Ionic name={iconName} color={color} size={size}/>    
           },
           tabBarShowLabel: false,
           tabBarActiveTintColor: '#00ced1',   
           tabBarInactiveTintColor: "#afeeee", 
           headerShown: false,
           tabBarStyle: { 
             backgroundColor: '#f5f5f5',
             borderRadius: 10,
             marginHorizontal: 8
           }
       })}
       
      >
        <Tab.Screen name="Home" component={HomeRotas} />
        <Tab.Screen name="Carrinho" component={Carrinho} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}