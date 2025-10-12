import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import FirstScreen from './screens/FirstScreen'
import SecondScreen from './screens/SecondScreen'

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='First'
					component={FirstScreen}
					options={{ title: 'Завдання 1' }}
				/>
				<Stack.Screen
					name='Second'
					component={SecondScreen}
					options={{ title: 'Завдання 2' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
