import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/login/Login';

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
};

export default LoginStack
