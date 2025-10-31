import Home from './components/Home';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
export default props => {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </SafeAreaView>
  );
};
