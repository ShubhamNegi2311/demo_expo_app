import { NativeStackScreenProps } from '@react-navigation/native-stack';
import DashboardNavigator from 'navigation/dashboard_navigator';
import React from 'react';
import { AppStackParams } from 'types/navigation_types';

type DashboardScreenProps = NativeStackScreenProps<AppStackParams, 'DashboardScreen'>;

const DashboardScreen: React.FC<DashboardScreenProps> = (props) => {
  return <DashboardNavigator />;
};

export default DashboardScreen;
