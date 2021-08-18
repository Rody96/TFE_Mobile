import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import { createStackNavigator } from '@react-navigation/stack';
import LoginControl from "../Auth/LoginControl";
import MeasurementsNavigation from "../Nav/MeasNavigation";
const Stack1 = createStackNavigator();

function MyApp() {
  return (
    <NavigationContainer>
      <Stack1.Navigator>
        <Stack1.Screen name="LoginControl" component={LoginControl} options={{ headerShown: false }}/>
        <Stack1.Screen name="Login" component={SignIn} options={{ headerShown: false }}/>
        <Stack1.Screen name="Home" component={MeasurementsNavigation} options={{ headerShown: false }} />
        <Stack1.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
      </Stack1.Navigator>
    </NavigationContainer>
  );
}

export default MyApp;