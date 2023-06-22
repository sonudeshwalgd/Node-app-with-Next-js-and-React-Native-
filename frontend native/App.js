import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EntryRoute from './src/modules/homepage/stacksbar/EntryRoute';

import  { NavigationContainer } from '@react-navigation/native'
import HomeComponent from './src/modules/homepage/routes';
import { Provider } from 'react-redux';
import { homeStore } from './src/store/homeModule/store';




export default function App() {


  return (
<>

<StatusBar backgroundColor="white" barStyle={'dark-content'}></StatusBar>
<NavigationContainer>
  <Provider store={homeStore}>
    <HomeComponent/>
  </Provider>
</NavigationContainer>


</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
