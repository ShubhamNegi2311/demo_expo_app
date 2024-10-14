import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import HomeDrawerNavigator from 'navigation/home_drawer_navigator';
import React from 'react';
import { DashboardTabsParams } from 'types/navigation_types';

type HomeTabProps = BottomTabScreenProps<DashboardTabsParams, 'HomeTab'>;

const HomeTab: React.FC<HomeTabProps> = (props) => {
  return <HomeDrawerNavigator />;
};

export default HomeTab;
