import { createDrawerNavigator } from "@react-navigation/drawer"
import CustomDrawer from "../view/CustomDrawer"
import Splash from "../components/Splash";
import Login from "../components/Login";
import Home from "../components/Home";
import Cadastro from "../components/Cadastro";
import ExplorePets from "../components/ExplorePets";
import BottomNav from "./BottomNav";
const Drawer = createDrawerNavigator();
export default props =>{
    return(
         <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props}/>} screenOptions={{
            headerShown:false,
            headerTitle: ""
         }}>
                
                <Drawer.Screen name="Splash" component={Splash}/>
                <Drawer.Screen name="Home" component={BottomNav}/>
                <Drawer.Screen name="Login" component={Login}/>
                <Drawer.Screen name="Cadastro" component={Cadastro}/>
                <Drawer.Screen name="ExplorerPets" component={ExplorePets}/>
        </Drawer.Navigator>
    )
}