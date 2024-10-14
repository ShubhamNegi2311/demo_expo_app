import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { Text, View } from 'react-native';
import { HomeDrawerParams } from 'types/navigation_types';

type ThirdScreenProps = DrawerScreenProps<HomeDrawerParams, 'ThirdScreen'>;

const ThirdScreen: React.FC<ThirdScreenProps> = (props) => {
  return (
    <View>
      <Text>ThirdScreen</Text>
    </View>
  );
};

export default ThirdScreen;
