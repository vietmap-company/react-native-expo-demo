import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { ShowMap } from './SimpleMap'; 
const Stack = createStackNavigator();
const Navigation = ({props}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ShowMap} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
