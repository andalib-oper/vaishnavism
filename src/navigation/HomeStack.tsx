import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home/Home';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
  );
};

export default HomeStack;
