import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View } from 'react-native';
import { DashboardTabsParams } from 'types/navigation_types';

type ProfileTabProps = BottomTabScreenProps<DashboardTabsParams, 'ProfileTab'>;

const ProfileTab: React.FC<ProfileTabProps> = (props) => {
  return (
    <View>
      <Text>ProfileTab</Text>
    </View>
  );
};

export default ProfileTab;
