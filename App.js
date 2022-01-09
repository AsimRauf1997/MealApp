import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import MealTabNav from './navigation/mealNavigator';
const fetcFonts = () =>{
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if(!fontLoaded){
    return (
      <AppLoading
      startAsync = {fetcFonts} 
      onFinish = {()=> setFontLoaded(true)}
      onError={console.warn}
      />
    );
  }
  return (
    <MealTabNav/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
