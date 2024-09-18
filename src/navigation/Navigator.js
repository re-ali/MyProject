import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Splash, Onboarding, Login } from '../utility/Path';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name='Splash' component={Splash} />
      <Stack.Screen name='Onboarding' component={Onboarding} />
      <Stack.Screen name='Login' component={Login} />

    </Stack.Navigator>
  </NavigationContainer>
  )
};

export default Navigator;
