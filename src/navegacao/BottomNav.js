import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/Home";
import ExplorePets from "../components/ExplorePets";
import Icon from "react-native-vector-icons/FontAwesome";
const Tab = createBottomTabNavigator();
export default () =>{
    return(
        <Tab.Navigator screenOptions={{
            headerShown:false,
            headerTitle: ""
         }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon:() => (
                    <Icon name="home" size={22} color="#CCC"/>
                )
                }}/>
            <Tab.Screen name="ExplorerPets" component={ExplorePets} options={{title:"Ver Animais" ,
                tabBarIcon: () => (
                    <Icon name="paw" size={22} color="#CCC"/>
                )
            }
        }/>
        </Tab.Navigator>
    )
}