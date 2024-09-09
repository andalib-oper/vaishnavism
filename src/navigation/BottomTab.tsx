import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { fontFamilyMedium, fontFamilyRegular } from '../styles/globalStyles';
import HomeStack from './HomeStack';
import { useNavigation } from '@react-navigation/native';
import { code_400, primary } from '../styles/colors';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  const {fontScale} = useWindowDimensions()
  const navigation = useNavigation()
return (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarStyle: {
        height: 76,
        elevation: 5,
        borderColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      },
      tabBarLabelStyle: {
        fontSize: 13 / fontScale,
        fontFamily: fontFamilyMedium,
        elevation: 0,
        marginTop: -8,
        marginBottom: 14,
        textAlign:'center',
        alignSelf:'center',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      },
      tabBarActiveTintColor: primary,
      tabBarInactiveTintColor: code_400,
    }}>
    <Tab.Screen
      name="Home"
      component={HomeStack}
      options={{
       
        tabBarIcon: ({focused}) => {
          return focused ? (
            <AntDesign name="Home" size={24} color={primary} />
          ) : (
            <AntDesign name="Home" size={24} color={code_400} />
          );
        },
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);
}
const styles = StyleSheet.create({
  btn: {
    // padding: 24,
    height: 60,
    width: 60,
    borderRadius: 100 / 2,
    backgroundColor: primary,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 35,
  },
  btn_container: {
    height: 80,
    width: 80,
    borderRadius: 100 / 2,
    padding: 20,
    backgroundColor: '#f4f4f5',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 35,
  },
});