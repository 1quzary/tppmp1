import React, { useState } from 'react'
import {
	ScrollView,
	Text,
	TextInput,
	Button,
	StyleSheet,
	View,
} from 'react-native'

export default function FifthScreen() {
	const [a, setA] = useState('')
	const [b, setB] = useState('')
	const [result, setResult] = useState('')

	// Реалізація операцій
	const add = (x, y) => x + y
	const subtract = (x, y) => x - y
	const multiply = (x, y) => x * y
	const modulo = (x, y) => x % y
	const power = (x, y) => {
		let res = 1
		for (let i = 0; i < y; i++) {
			res *= x
		}
		return res
	}

	// Основна функція-калькулятор
	const calculator = (x, y, operationFunc) => operationFunc(x, y)

	const handleOperation = op => {
		const numA = parseFloat(a)
		const numB = parseFloat(b)

		if (isNaN(numA) || isNaN(numB)) {
			setResult('Введіть коректні числа')
			return
		}

		let res
		switch (op) {
			case '+':
				res = add(numA, numB)
				break
			case '-':
				res = subtract(numA, numB)
				break
			case '*':
				res = multiply(numA, numB)
				break
			case '%':
				res = modulo(numA, numB)
				break
			case '^':
				res = power(numA, numB)
				break
			default:
				res = 'Невідома операція'
		}

		setResult(`Результат: ${res}`)
	}

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>Завдання 5 — Калькулятор</Text>

			<Text>Введіть перше число:</Text>
			<TextInput
				style={styles.input}
				value={a}
				onChangeText={setA}
				keyboardType='numeric'
				placeholder='Наприклад, 5'
			/>

			<Text>Введіть друге число:</Text>
			<TextInput
				style={styles.input}
				value={b}
				onChangeText={setB}
				keyboardType='numeric'
				placeholder='Наприклад, 3'
			/>

			<View style={styles.buttons}>
				<Button title='Додати (+)' onPress={() => handleOperation('+')} />
				<Button title='Відняти (-)' onPress={() => handleOperation('-')} />
				<Button title='Множити (*)' onPress={() => handleOperation('*')} />
				<Button
					title='Остача від ділення (%)'
					onPress={() => handleOperation('%')}
				/>
				<Button
					title='Піднести до степеня (^)'
					onPress={() => handleOperation('^')}
				/>
			</View>

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
	buttons: { marginTop: 10, gap: 8 },
	result: { marginTop: 12, fontSize: 18 },
})
