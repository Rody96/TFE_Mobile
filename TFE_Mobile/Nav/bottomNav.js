import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { faSeedling, faBell, faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Notifications from "../Components/Notifications";
import Settings from "../Components/Settings";
import HomeScreen from "../Components/HomeScreen";
//import CustomHeader from "./Header/CustomHeader";
import { Container } from "native-base";

const BottomTab = createBottomTabNavigator();

//* **************************************** BOTTOM NAVIGATION *********************************//
function Navigation({ navigation }) { // 2nd param : route
  return (
    <Container>

      {/* <CustomHeader nav={navigation} /> */}

      <BottomTab.Navigator tabBarOptions={{
        activeBackgroundColor: "#26c2e3", // Couleur d'arrière-plan de l'onglet sélectionné
        inactiveBackgroundColor: "#f1f1f1", // Couleur d'arrière-plan des onglets non sélectionnés
        showLabel: false, // On masque les titres
        showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définies
      }}>
        <BottomTab.Screen name="Accueil" component={HomeScreen}
          options={{
            tabBarIcon: () => {
              return <FontAwesomeIcon icon={faSeedling} />;
            }
            // tabBarVisible: (route.state === undefined) ? (true) : (route.state.routes[0].state.index > 0 ? false : true)
            // Pour retirer la bottom bar
          }} />
        <BottomTab.Screen name="Notifications" component={Notifications}
          options={{
            tabBarIcon: () => {
              return <FontAwesomeIcon icon={faBell} />;
            }
          }}
        />
        <BottomTab.Screen name="Settings" component={Settings}
          options={{
            tabBarIcon: () => {
              return <FontAwesomeIcon icon={faListUl} />;
            }
            // tabBarVisible: (route.state === undefined) ? (true) : (route.state.routes[0].state.index > 0 ? false : true)
            // Pour retirer la bottom bar
          }} />
      </BottomTab.Navigator>
    </Container>
  );
}

export default Navigation;