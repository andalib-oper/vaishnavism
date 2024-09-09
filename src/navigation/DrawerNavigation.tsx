import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { BottomTab } from './BottomTab';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="BottomTab"
      screenOptions={{
        swipeEnabled: false,
      }}>
      <Drawer.Screen
        name="BottomTab"
        component={BottomTab}
        options={{
          headerShown: false,
          drawerItemStyle: {height: 0},
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}