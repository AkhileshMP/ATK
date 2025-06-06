import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';

type RootStackParamList = {
  Home: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation: React.FC = ({ navigation }: any) => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default Navigation;