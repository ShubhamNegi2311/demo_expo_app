import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeTab from 'screen/dashboard/home';
import ProfileTab from 'screen/dashboard/profile';
import SettingsTab from 'screen/dashboard/settings';
import { DashboardTabsParams } from 'types/navigation_types';

const DashBoardTabs = createBottomTabNavigator<DashboardTabsParams>();

const DashboardNavigator = () => {
  return (
    <DashBoardTabs.Navigator>
      <DashBoardTabs.Screen
        name={'HomeTab'}
        component={HomeTab}
        options={{
          tabBarIcon: ({ focused, size }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={focused ? '#000000' : '#999999'}
              />
            );
          },
          tabBarLabel: 'Home',
          headerShown: false
        }}
      />
      <DashBoardTabs.Screen
        name={'ProfileTab'}
        component={ProfileTab}
        options={{
          tabBarIcon: ({ focused, size }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? 'account' : 'account-outline'}
                size={size}
                color={focused ? '#000000' : '#999999'}
              />
            );
          },
          tabBarLabel: 'Profile'
        }}
      />
      <DashBoardTabs.Screen
        name={'SettingsTab'}
        component={SettingsTab}
        options={{
          tabBarIcon: ({ focused, size }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? 'cog' : 'cog-outline'}
                size={size}
                color={focused ? '#000000' : '#999999'}
              />
            );
          },
          tabBarLabel: 'Settings'
        }}
      />
    </DashBoardTabs.Navigator>
  );
};

export default DashboardNavigator;
