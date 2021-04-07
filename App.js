import "react-native-gesture-handler"
import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

//Screens
import { Onboarding } from "./src/screens/"

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={Onboarding} options= {{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return <App />
}
