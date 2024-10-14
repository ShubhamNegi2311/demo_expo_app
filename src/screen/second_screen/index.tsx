import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { Text, View } from 'react-native';
import { HomeDrawerParams } from 'types/navigation_types';

type SecondScreenProps = DrawerScreenProps<HomeDrawerParams, 'SecondScreen'>;

const SecondScreen: React.FC<SecondScreenProps> = (props) => {
  return (
    <View>
      <Text>SecondScreen</Text>
    </View>
  );
};

export default SecondScreen;
