import React, { useState } from 'react'
import { ScrollView, Text, TextInput, Button, StyleSheet } from 'react-native'

export default function ThirdScreen() {
	const [char, setChar] = useState('')
	const [result, setResult] = useState('')

	const analyzeChar = ch => {
		if (!ch) return 'Введіть символ'
		if (ch.length > 1) return 'Будь ласка, введіть тільки один символ'

		const code = ch.charCodeAt(0)
		let res = `Аналіз символу: "${ch}"\n`

		// Перевірка на цифру
		if (ch >= '0' && ch <= '9') {
			res += '- Це цифра\n'
		} else if (
			(ch >= 'A' && ch <= 'Z') ||
			(ch >= 'a' && ch <= 'z') ||
			(code >= 1040 && code <= 1103) ||
			(code >= 1025 && code <= 1105)
		) {
			res += '- Це літера\n'

			// Перевірка мови
			if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {
				res += '- Англійська літера\n'
			} else {
				res += '- Українська літера\n'
			}

			// Перевірка регістру
			if (ch === ch.toUpperCase()) {
				res += '- Великий регістр\n'
			} else {
				res += '- Малий регістр\n'
			}
		} else {
			res += '- Не літера і не цифра\n'
		}

		return res
	}

	const handleAnalyze = () => {
		setResult(analyzeChar(char))
	}

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>Завдання 3 — Аналізатор символу</Text>

			<Text>Введіть один символ:</Text>
			<TextInput
				style={styles.input}
				value={char}
				onChangeText={setChar}
				placeholder='Наприклад, A'
				maxLength={1}
			/>

			<Button title='Аналізувати' onPress={handleAnalyze} />

			{result ? <Text style={styles.result}>{result}</Text> : null}
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
	result: { marginTop: 12, fontSize: 18, whiteSpace: 'pre-line' },
})
