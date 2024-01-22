import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../theme/theme';
// import {BlurView} from '@react-native-community/blur';
import CustomIcon from '../components/CustomIcon';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';

import HomeIcon from '../assets/icons/homeIcon';
import Bag from '../assets/icons/bag';
import FavoritesScreen from '../screens/FavoriteScreen';
import Heart from '../assets/icons/heart';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import Bell from '../assets/icons/Bell';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => <View style={styles.backGroundStyle} />,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="home"
              size={32}
              icon={<HomeIcon size={32} color= {
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
              />}
            />
          ),
        }}></Tab.Screen>
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <CustomIcon
                name="cart"
                size={25}
                icon={<Bag size={24} color= {
                  focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                }
                />}
              />
            ),
        }}></Tab.Screen>
        <Tab.Screen
          name="Favorite"
          component={FavoritesScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <CustomIcon
                name="like"
                size={25}
                icon={<Heart size={32} color= {
                  focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                }
                />}
              />
            ),
        }}></Tab.Screen>
        <Tab.Screen
          name="History"
          component={OrderHistoryScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <CustomIcon
                name="bell"
                size={25}
                color={
                  focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                }
                icon={<Bell />}
              />
            ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  backGroundStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.primaryDarkGreyHex
  },
});

export default TabNavigator;