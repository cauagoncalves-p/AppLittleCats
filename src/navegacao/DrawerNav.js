import { createDrawerNavigator } from "@react-navigation/drawer"
import CustomDrawer from "../view/CustomDrawer"
import Splash from "../components/Splash";
import Login from "../components/Login";
import Home from "../components/Home";
import Cadastro from "../components/Cadastro";
const Drawer = createDrawerNavigator();
export default props =>{
    return(
         <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props}/>} screenOptions={{
            headerShown:false,
            headerTitle: ""
         }}>
                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen name="Splash" component={Splash}/>
                <Drawer.Screen name="Login" component={Login}/>
                <Drawer.Screen name="Cadastro" component={Cadastro}/>
        </Drawer.Navigator>
    )
}