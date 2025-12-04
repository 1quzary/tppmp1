import React, { useState } from 'react'
import {
	ScrollView,
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
} from 'react-native'

export default function SecondScreen() {
	const [input, setInput] = useState('')
	const [sorted, setSorted] = useState([])

	// Функція сортування
	const sortArray = (arr, algorithm = 'bubble') => {
		const result = [...arr] // копіюємо масив

		if (algorithm === 'bubble') {
			// Бульбашка
			for (let i = 0; i < result.length - 1; i++) {
				for (let j = 0; j < result.length - 1 - i; j++) {
					if (result[j] > result[j + 1]) {
						// обмін без swap
						const temp = result[j]
						result[j] = result[j + 1]
						result[j + 1] = temp
					}
				}
			}
		} else if (algorithm === 'selection') {
			// Сортування вибором
			for (let i = 0; i < result.length - 1; i++) {
				let minIndex = i
				for (let j = i + 1; j < result.length; j++) {
					if (result[j] < result[minIndex]) {
						minIndex = j
					}
				}
				if (minIndex !== i) {
					const temp = result[i]
					result[i] = result[minIndex]
					result[minIndex] = temp
				}
			}
		}

		return result
	}

	const handleSort = algorithm => {
		const arr = input.split(',').map(x => parseFloat(x.trim()))
		if (arr.some(isNaN)) {
			setSorted(['Некоректний ввід'])
		} else {
			setSorted(sortArray(arr, algorithm))
		}
	}

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>Завдання 2 — Сортування масиву</Text>

			<Text>Введіть числа через кому:</Text>
			<TextInput
				style={styles.input}
				value={input}
				onChangeText={setInput}
				placeholder='Наприклад: 5, 2, 9, 1'
			/>

			<View style={{ marginVertical: 5 }}>
				<Button
					title='Сортувати бульбашкою'
					onPress={() => handleSort('bubble')}
				/>
			</View>
			<View style={{ marginVertical: 5 }}>
				<Button
					title='Сортувати вибором'
					onPress={() => handleSort('selection')}
				/>
			</View>

			{sorted.length > 0 && (
				<Text style={styles.result}>
					Відсортований масив: {sorted.join(', ')}
				</Text>
			)}
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
