import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View } from 'react-native';
import { DashboardTabsParams } from 'types/navigation_types';

type SettingsTabProps = BottomTabScreenProps<DashboardTabsParams, 'SettingsTab'>;

const SettingsTab: React.FC<SettingsTabProps> = (props) => {
  return (
    <View>
      <Text>SettingsTab</Text>
    </View>
  );
};

export default SettingsTab;
