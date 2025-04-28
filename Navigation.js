import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Screens/Home';
import Humano from './src/Screens/Humano';
import Maquina from './src/Screens/Maquina';
import Conversao from './src/Screens/Conversao';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Escolha o modo' }} />
        <Stack.Screen name="VsHumano" component={Humano} options={{ title: 'Humano x Humano' }} />
        <Stack.Screen name="VsMaquina" component={Maquina} options={{ title: 'Humano x Máquina' }} />
        <Stack.Screen name="Conversao" component={Conversao} options={{ title: 'Conversor de moedas' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
