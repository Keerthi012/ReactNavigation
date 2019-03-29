import { createStackNavigator } from 'react-navigation';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';

const AppNavigator = createStackNavigator({
  First: { screen: FirstScreen },
  Second: { screen: SecondScreen }
},
{
  initialRouteName: 'First'
}
);

export default AppNavigator;