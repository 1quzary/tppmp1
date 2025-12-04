import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'

export default function HomeScreen({ navigation }) {
	return (
		<View style={styles.wrapper}>
			{/*Лабораторна 1*/}
			{/*
			<TouchableOpacity
				style={styles.customButton}
				onPress={() => navigation.navigate('First')}
			>
				<Text style={styles.buttonText}>Завдання 1</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.customButton}
				onPress={() => navigation.navigate('Second')}
			>
				<Text style={styles.buttonText}>Завдання 2</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.customButton}
				onPress={() => navigation.navigate('Third')}
			>
				<Text style={styles.buttonText}>Завдання 3</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.customButton}
				onPress={() => navigation.navigate('Fourth')}
			>
				<Text style={styles.buttonText}>Завдання 4</Text>
			</TouchableOpacity>
			*/}

			{/*Лабораторна 2*/}
			<TouchableOpacity
				style={styles.customButton}
				onPress={() => navigation.navigate('First')}
			>
				<Text style={styles.buttonText}>Завдання 1</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.customButton}
				onPress={() => navigation.navigate('Second')}
			>
				<Text style={styles.buttonText}>Завдання 2</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.customButton}
				onPress={() => navigation.navigate('Third')}
			>
				<Text style={styles.buttonText}>Завдання 3</Text>
			</TouchableOpacity>

			{/*Лабораторна 3*/}
			{/*
			<TouchableOpacity
				style={styles.customButton}
				onPress={() => navigation.navigate('First')}
			>
				<Text style={styles.buttonText}>Завдання 1</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.customButton}
				onPress={() => navigation.navigate('Second')}
			>
				<Text style={styles.buttonText}>Завдання 2</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.customButton}
				onPress={() => navigation.navigate('Third')}
			>
				<Text style={styles.buttonText}>Завдання 3</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.customButton}
				onPress={() => navigation.navigate('Fourth')}
			>
				<Text style={styles.buttonText}>Завдання 4</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.customButton}
				onPress={() => navigation.navigate('Fifth')}
			>
				<Text style={styles.buttonText}>Завдання 5</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.customButton}
				onPress={() => navigation.navigate('Six')}
			>
				<Text style={styles.buttonText}>Завдання 6</Text>
			</TouchableOpacity>
			*/}
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		alignItems: 'center',
		marginTop: 20,
	},
	customButton: {
		backgroundColor: '#4a90e2',
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderRadius: 8,
		marginVertical: 8,
		width: '80%',
		alignItems: 'center',
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '600',
	},
})
