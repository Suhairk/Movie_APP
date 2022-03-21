import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import HomeScreen from './src/screens/Home_Screen';
import MovieScreen from './src/screens/MovieScreen'
import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import SplashScreen from './src/screens/SplashScreen'

// import { useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading';


const stack = createStackNavigator();
const App = () => {

    return(
      <NavigationContainer>
        <stack.Navigator>
        <stack.Screen name='splash' component={SplashScreen} options={{headerShown:false}}/>
        <stack.Screen name='login' component={LoginScreen} options={{headerShown:false}} />
        <stack.Screen name='register' component={RegisterScreen} options={{headerShown:false}} />
          <stack.Screen name='home' component={HomeScreen} options={{headerShown:false}} />
          <stack.Screen name='movie' component={MovieScreen} options={{headerShown:false}}/>
        </stack.Navigator>
      </NavigationContainer>
     
    );
    
  };





export default App
