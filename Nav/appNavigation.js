import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./bottomNav";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../Components/HomeScreen";
import LoginControl from "../Auth/LoginControl";

const Stack1 = createStackNavigator();

function MyApp() {
  return (
    <NavigationContainer>
      <Stack1.Navigator>
        <Stack1.Screen name="LoginControl" component={LoginControl} options={{ headerShown: false }}/>
        <Stack1.Screen name="Login" component={SignIn} options={{ headerShown: false }}/>
        <Stack1.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
        <Stack1.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
      </Stack1.Navigator>
    </NavigationContainer>
  );
}

/*
const Stack = createStackNavigator();

function SignUpNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp2" component={SignUp2} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp3" component={SignUp3} options={{ headerShown: false }} />

    </Stack.Navigator>
  )
}
*/

export default MyApp;