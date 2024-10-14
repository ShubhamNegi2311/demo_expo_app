import { Entypo } from '@expo/vector-icons';
import * as Splash from 'expo-splash-screen';
import React from 'react';
import { Text, View } from 'react-native';

// Keep the splash screen visible while we fetch resources
Splash.preventAutoHideAsync();

const SplashScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SplashScreen Demo! 👋</Text>
      <Entypo name={'rocket'} size={30} />
    </View>
  );
};

export default SplashScreen;
