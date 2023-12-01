import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import MelhoresProdutoresRotas from "./MelhoresProdutoresRotas";
import ProdutorRotas from "./ProdutorRotas";

// TAB botões de navegação
const Tab = createBottomTabNavigator();

const Coracao = () => {
  return <AntDesign name="hearto" size={24} color="#2A9F85" />;
};

const Home = () => {
  return <AntDesign name="home" size={24} color="#2A9F85" />;
};

export default function AppRotas() {
  return (
    <NavigationContainer>
      {/* Usando o tabs */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color }) => {
            let Icon = Home;

            if (route.name === "Melhores Produtores") {
              Icon = Coracao;
            }
            return <Icon color={color} />;
          },
          tabBarActiveTintColor: "#2A9F85",
          tabBarInactiveTintColor: "#c7c7c7",
        })}
      >
        <Tab.Screen name="Home" component={ProdutorRotas} />
        <Tab.Screen
          name="Melhores Produtores"
          component={MelhoresProdutoresRotas}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
