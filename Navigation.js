import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SimpleMap from './ShowMap';
const Stack = createStackNavigator();
const Navigation = ({props}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={SimpleMap} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
