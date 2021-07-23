import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { faHome, faBell, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Notifications from "../Components/Notifications";
import Settings from "../Components/Settings";
import HomeScreen from "../Components/HomeScreen";
//import CustomHeader from "./Header/CustomHeader";
import MeasurementsNavigation from "../Nav/MeasNavigation";
import { Container } from "native-base";

const bottomNav = createBottomTabNavigator();

function Tabs(){
  return (
    <bottomNav.Navigator
      tabBarOptions={{
      activeBackgroundColor: "#26c2e3", // Couleur d'arrière-plan de l'onglet sélectionné
      inactiveBackgroundColor: "#f1f1f1", // Couleur d'arrière-plan des onglets non sélectionnés
      showLabel: false, // On masque les titres
      showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définies
    }}
    >
      <bottomNav.Screen name="Home" component={MeasurementsNavigation} 
        options={{
          tabBarIcon: () => {
            return <FontAwesomeIcon icon={faHome} />;
          }
        }}
      />
      <bottomNav.Screen name="Notifications" component={Notifications} 
        options={{
          tabBarIcon: () => {
            return <FontAwesomeIcon icon={faBell} />;
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