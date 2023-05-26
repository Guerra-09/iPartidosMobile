import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../views/Home/home'
import Fields from '../views/fields'
import Community from "../views/community";
import News from "../views/news";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"; 


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focus, color, size }) => {
            let iconName = "";

            switch (route.name) {
              case "Home":
                iconName = "home";
                break;
              case "Fields":
                iconName = "soccer-field";
                break;
              case "Community":
                iconName = "account-group";
                break;
              case "News":
                iconName = "newspaper";
                break;
            }


            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        }
        )}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Fields"
          component={Fields}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Community"
          component={Community}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="News"
          component={News}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    );
}

const Test = () => {
    return(
        <View style={{backgroundColor: 'pink', flex: 1}}>
            <Text>Hola mundo</Text>
        </View>
        
    );
}

export default Tabs;