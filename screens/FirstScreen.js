import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function FirstScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Hello World!</Text>
			<Button
				title='Завдання 2'
				onPress={() => navigation.navigate('Second')}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 22,
		marginBottom: 10,
	},
})
