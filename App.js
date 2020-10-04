import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {FirstScreenNavigator, SecondScreenNavigator, ThirdScreenNavigator} from './CustomNavigation'
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
            component={FirstScreenNavigator}
          />
          <Tab.Screen
            name="Screen 2"
            component={SecondScreenNavigator}
          />
          <Tab.Screen
            name="Screen 3"
            component={ThirdScreenNavigator}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;
