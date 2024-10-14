import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import FirstScreen from 'screen/first_screen';
import SecondScreen from 'screen/second_screen';
import ThirdScreen from 'screen/third_screen';
import { HomeDrawerParams } from 'types/navigation_types';
import { SCREEN_WIDTH } from 'utilities/constants';

const HomeDrawer = createDrawerNavigator<HomeDrawerParams>();

const HomeDrawerNavigator = () => {
  return (
    <HomeDrawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: SCREEN_WIDTH * 0.8
        }
      }}
    >
      <HomeDrawer.Screen component={FirstScreen} name={'FirstScreen'} options={{}} />
      <HomeDrawer.Screen component={SecondScreen} name={'SecondScreen'} />
      <HomeDrawer.Screen component={ThirdScreen} name={'ThirdScreen'} />
    </HomeDrawer.Navigator>
  );
};

export default HomeDrawerNavigator;
