import React from 'react'
import { StyleSheet } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/screens/Home'
import Profile from './src/screens/Profile'

const Stack = createStackNavigator()

function StackNavigator() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Home"
        component={Home}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
      />

    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
