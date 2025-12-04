import React, { useState } from 'react'
import { ScrollView, Text, TextInput, Button, StyleSheet } from 'react-native'

export default function FourthScreen() {
	const [input, setInput] = useState('')
	const [result, setResult] = useState([])

	const analyzeString = str => {
		const countMap = {}
		for (let i = 0; i < str.length; i++) {
			const ch = str[i]
			if (countMap[ch]) {
				countMap[ch] += 1
			} else {
				countMap[ch] = 1
			}
		}

		// Перетворюємо на масив [символ, кількість] для відображення
		return Object.entries(countMap)
	}

	const handleAnalyze = () => {
		if (!input) {
			setResult([])
		} else {
			setResult(analyzeString(input))
		}
	}

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>Завдання 4 — Аналізатор рядка</Text>

			<Text>Введіть рядок:</Text>
			<TextInput
				style={styles.input}
				value={input}
				onChangeText={setInput}
				placeholder='Наприклад, Hello World'
			/>

			<Button title='Аналізувати' onPress={handleAnalyze} />

			{result.length > 0 && (
				<ScrollView style={{ marginTop: 12 }}>
					<Text style={styles.subtitle}>Таблиця символів та кількостей:</Text>
					{result.map(([char, count], idx) => (
						<Text key={idx} style={styles.row}>
							"{char}" : {count}
						</Text>
					))}
				</ScrollView>
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
	subtitle: { fontSize: 18, marginBottom: 8, fontWeight: '500' },
	input: {
		borderWidth: 1,
		borderColor: '#ccc',
		padding: 8,
		marginVertical: 10,
		borderRadius: 5,
	},
	row: { fontSize: 16, marginBottom: 2 },
})
