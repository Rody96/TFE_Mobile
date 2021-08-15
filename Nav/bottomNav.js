import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { faHome, faBell, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
//import Notifications from "../Components/Notifications";
import Settings from "../Components/Settings";
import HomeScreen from "../Components/HomeScreen";
import MeasurementsNavigation from "../Nav/MeasNavigation";
import { Container } from "native-base";

const bottomNav = createBottomTabNavigator();

function Tabs(){
  return (
    <bottomNav.Navigator
      tabBarOptions={{
      activeBackgroundColor: "#4ca2cd",
      inactiveBackgroundColor: "#f1f1f1", 
      showLabel: false,
      showIcon: true
    }}
    >
      <bottomNav.Screen name="Home" component={MeasurementsNavigation} 
        options={{
          tabBarIcon: () => {
            return <FontAwesomeIcon icon={faHome} />;
          }
        }}
      />
      <bottomNav.Screen name="Settings" component={Settings} 
        options={{
          tabBarIcon: () => {
            return <FontAwesomeIcon icon={faCog} />;
          }
        }}
      />
    </bottomNav.Navigator>
  );
}

export default Tabs;