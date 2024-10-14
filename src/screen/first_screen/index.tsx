import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { Text, View } from 'react-native';
import { HomeDrawerParams } from 'types/navigation_types';

type FirstScreenProps = DrawerScreenProps<HomeDrawerParams, 'FirstScreen'>;

const FirstScreen: React.FC<FirstScreenProps> = (props) => {
  return (
    <View>
      <Text>FirstScreen</Text>
    </View>
  );
};

export default FirstScreen;
