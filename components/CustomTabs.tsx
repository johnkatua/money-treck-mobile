import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { View, Platform } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors, spacingY } from '../constants/theme';
import { verticalScale } from '../utils/styling';
import { ChartBar, House, User } from 'phosphor-react-native';

const CustomTabs: FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const tabBarIcons = {
    index: (isFocused) => (
      <House
        size={verticalScale(30)}
        color={isFocused ? colors.primary : colors.neutral400}
        weight={isFocused ? 'fill' : 'regular'}
      />
    ),
    statistics: (isFocused) => (
      <ChartBar
        size={verticalScale(30)}
        color={isFocused ? colors.primary : colors.neutral400}
        weight={isFocused ? 'fill' : 'regular'}
      />
    ),
    settings: (isFocused) => (
      <User
        size={verticalScale(30)}
        color={isFocused ? colors.primary : colors.neutral400}
        weight={isFocused ? 'fill' : 'regular'}
      />
    ),
  };
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label: any =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            // href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
            key={route.key}
          >
            {tabBarIcons[route.name](isFocused)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabs;

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopColor: colors.neutral700,
    borderWidth: 1,
    backgroundColor: colors.neutral800,
    height: Platform.OS === 'ios' ? verticalScale(73) : verticalScale(60),
    borderTopWidth: 1,
  },
  tabBarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Platform.OS === 'ios' ? spacingY._10 : spacingY._5,
  },
  tabBarItemText: {
    fontSize: verticalScale(12),
  },
});
