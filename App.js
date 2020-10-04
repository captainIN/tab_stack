

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: {fontSize:18},
            activeTintColor: 'red',
            inactiveTintColor: 'black'
          }}
        >
          <Tab.Screen
            name="Screen 1"
            component={Screen1}
          />
          <Tab.Screen
            name="Screen 2"
            component={Screen2}
          />
          <Tab.Screen
            name="Screen 3"
            component={Screen3}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;
