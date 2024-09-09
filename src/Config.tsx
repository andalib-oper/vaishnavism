import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {WithSplashScreen} from './screens/onboarding/Splash';
import {useDispatch, useSelector} from 'react-redux';
import DrawerNavigation from './navigation/DrawerNavigation';
import LoginStack from './navigation/Loginstack';

const Config = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  const authState = useSelector((state:any)=>state.authState)
  useEffect(() => {
    setIsAppReady(true);
  }, []);
  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <NavigationContainer>
       {authState?.isLoggedIn?<DrawerNavigation/>:<LoginStack/>}
      </NavigationContainer>
    </WithSplashScreen>
  );
};

export default Config;
