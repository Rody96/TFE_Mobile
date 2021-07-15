import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TempScreen from "../Components/TempScreen";
import HumScreen from "../Components/HumScreen";
import AirQualityScreen from "../Components/AirQualityScreen";
import HomeScreen from "../Components/HomeScreen";

const Stack = createStackNavigator();

function MeasurementsNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Humidity" component={HumScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Temperature" component={TempScreen} options={{ headerShown: false }} />
      <Stack.Screen name="airQuality" component={AirQualityScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
export default MeasurementsNavigation;