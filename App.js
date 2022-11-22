import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaBoasVindas from './telas/TelaBoasVindas';
import TelaListagem from './telas/TelaListagem';
import TelaVisualizacao from './telas/TelaVisualizacao';
import TelaRegistro from './telas/TelaRegistro';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='BoasVindas'
      >
        <Stack.Screen
          name="BoasVindas"
          component={TelaBoasVindas}
          options={{ title: 'Boas-Vindas!' }}
        />
        <Stack.Screen name="Listagem" component={TelaListagem} />
        <Stack.Screen name="Registro" component={TelaRegistro} />
        <Stack.Screen name="Visualizacao" component={TelaVisualizacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
