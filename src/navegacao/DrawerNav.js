import { createDrawerNavigator } from "@react-navigation/drawer"
import CustomDrawer from "../view/CustomDrawer"
import Splash from "../components/Splash";
import Login from "../components/Login";
import Home from "../components/Home";
const Drawer = createDrawerNavigator();
export default props =>{
    return(
         <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props}/>} screenOptions={{
            headerShown:true,
            headerStyle:{
                backgroundColor:"tranparent",
                elevation: 0,
                shadowOpacity:0
            },
            headerTitle: ""
         }}>
                <Drawer.Screen name="Splash" component={Splash}/>
                <Drawer.Screen name="Login" component={Login}/>
                <Drawer.Screen name="Home" component={Home}/>
        </Drawer.Navigator>
    )
}