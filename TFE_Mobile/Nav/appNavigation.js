import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./bottomNav";
import SignIn from "../Auth/SignIn";
//import SimpleComponent from "../Components/simpleComponent";
import SignUp1 from "../Auth/SignUp1";
import SignUp2 from "../Auth/SignUp2";
import SignUp3 from '../Auth/SignUp3';
import { createStackNavigator } from '@react-navigation/stack';


const Stack1 = createStackNavigator();

function MyApp() {
  return (
    <NavigationContainer>
      <Stack1.Navigator>
        <Stack1.Screen name="Login" component={SignIn} options={{ headerShown: false }}/>
        <Stack1.Screen name="Home" component={Navigation} options={{ headerShown: false }} />
        <Stack1.Screen name="SignUp" component={SignUpNavigation} options={{ headerShown: false }}/>
      </Stack1.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function SignUpNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp1" component={SignUp1} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp2" component={SignUp2} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp3" component={SignUp3} options={{ headerShown: false }} />

    </Stack.Navigator>
  )
}

export default MyApp;