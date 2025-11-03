import Home from './components/Home';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import CardPets from './components/CardPets/CardPets'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ExplorePets from './components/ExplorePets';


export default props => {
  const Drawer = createDrawerNavigator();
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{headerShown:false}}>
          <Drawer.Screen name="ExplorePets" component={ExplorePets}/>
          <Drawer.Screen name="Home" component={Home}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
