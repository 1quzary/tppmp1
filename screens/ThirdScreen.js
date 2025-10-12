import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function ThirdScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Завдання 2</Text>
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
