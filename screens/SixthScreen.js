import React, { useState } from 'react'
import { ScrollView, Text, TextInput, Button, StyleSheet } from 'react-native'

export default function SixthScreen() {
	const [x, setX] = useState('')
	const [y, setY] = useState('')
	const [result, setResult] = useState('')

	// Функція перевірки належності точки колу
	// circles — масив об'єктів {centerX, centerY, radius}
	const findLargestCircleContainingPoint = (circles, pointX, pointY) => {
		let largestCircle = null
		let largestRadius = -1

		for (let i = 0; i < circles.length; i++) {
			const c = circles[i]
			const dx = pointX - c.centerX
			const dy = pointY - c.centerY
			// Перевірка: точка всередині кола (не використовуючи Math.sqrt)
			if (dx * dx + dy * dy <= c.radius * c.radius) {
				if (c.radius > largestRadius) {
					largestRadius = c.radius
					largestCircle = c
				}
			}
		}

		return largestCircle
	}

	const handleCheck = () => {
		const px = parseFloat(x)
		const py = parseFloat(y)

		if (isNaN(px) || isNaN(py)) {
			setResult('Введіть коректні координати точки')
			return
		}

		// Масив кіл (центр та радіус)
		const circles = [
			{ centerX: 0, centerY: 0, radius: 5 },
			{ centerX: 2, centerY: 2, radius: 3 },
			{ centerX: -1, centerY: -1, radius: 4 },
			{ centerX: 1, centerY: 1, radius: 6 }, // найбільше коло, що містить точку (якщо входить)
		]

		const largestCircle = findLargestCircleContainingPoint(circles, px, py)

		if (largestCircle) {
			setResult(
				`Точка (${px}, ${py}) входить у коло з центром (${largestCircle.centerX}, ${largestCircle.centerY}) та радіусом ${largestCircle.radius}`
			)
		} else {
			setResult(`Точка (${px}, ${py}) не входить у жодне коло`)
		}
	}

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>Завдання 6 — Перевірка точки у колі</Text>

			<Text>Введіть координату X:</Text>
			<TextInput
				style={styles.input}
				value={x}
				onChangeText={setX}
				keyboardType='numeric'
				placeholder='Наприклад, 1'
			/>

			<Text>Введіть координату Y:</Text>
			<TextInput
				style={styles.input}
				value={y}
				onChangeText={setY}
				keyboardType='numeric'
				placeholder='Наприклад, 2'
			/>

			<Button title='Перевірити' onPress={handleCheck} />

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
