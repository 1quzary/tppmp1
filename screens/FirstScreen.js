import React, { useState } from 'react'
import { ScrollView, Text, TextInput, Button, StyleSheet } from 'react-native'

export default function FirstScreen() {
	const [number, setNumber] = useState('')
	const [result, setResult] = useState(null)

	// Функція обчислення факторіалу
	const factorial = n => {
		if (n < 0) return null // факторіал від'ємного числа не визначений
		if (n === 0 || n === 1) return 1
		let fact = 1
		for (let i = 2; i <= n; i++) {
			fact *= i
		}
		return fact
	}

	const handleCalculate = () => {
		const n = parseInt(number)
		if (isNaN(n) || n < 0) {
			setResult('Введіть додатне ціле число')
		} else {
			setResult(`Факторіал числа ${n} = ${factorial(n)}`)
		}
	}

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>Завдання 1 — Факторіал</Text>

			<Text>Введіть число:</Text>
			<TextInput
				style={styles.input}
				value={number}
				onChangeText={setNumber}
				keyboardType='numeric'
				placeholder='Наприклад, 5'
			/>

			<Button title='Обчислити факторіал' onPress={handleCalculate} />

			{result && <Text style={styles.result}>{result}</Text>}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: { padding: 20 },
	title: {
		fontSize: 22,
		marginBottom: 12,
		fontWeight: '600',
		textAlign: 'center',
	},
	input: {
		borderWidth: 1,
		borderColor: '#ccc',
		padding: 8,
		marginVertical: 10,
		borderRadius: 5,
	},
	result: { marginTop: 12, fontSize: 18 },
})
