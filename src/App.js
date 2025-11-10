import Home from './components/Home';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import CardPets from './components/CardPets/CardPets'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ExplorePets from './components/ExplorePets';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import DrawerNav from './navegacao/DrawerNav';

export default props => {
  const Drawer = createDrawerNavigator();
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
            <DrawerNav/>
      </NavigationContainer>
    </SafeAreaView>
  );
};
