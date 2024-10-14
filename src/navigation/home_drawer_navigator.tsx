import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import FirstScreen from 'screen/first_screen';
import SecondScreen from 'screen/second_screen';
import ThirdScreen from 'screen/third_screen';
import { HomeDrawerParams } from 'types/navigation_types';

const HomeDrawer = createDrawerNavigator<HomeDrawerParams>();

const HomeDrawerNavigator = () => {
  return (
    <HomeDrawer.Navigator>
      <HomeDrawer.Screen component={FirstScreen} name={'FirstScreen'} />
      <HomeDrawer.Screen component={SecondScreen} name={'SecondScreen'} />
      <HomeDrawer.Screen component={ThirdScreen} name={'ThirdScreen'} />
    </HomeDrawer.Navigator>
  );
};

export default HomeDrawerNavigator;
