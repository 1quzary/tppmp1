import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

export default function ThirdScreen() {
	const originalString = 'Hello World. This is Swift programming language'

	// 1. Довжина рядка
	const length = originalString.length

	// 2. Замінити всі "i" на "u"
	const replacedI = originalString.replace(/i/g, 'u')

	// 3. Видалити 4-й, 7-й та 10-й символи
	// Індексація з 0, тому позиції: 3, 6, 9
	const removeChars = (str, indexes) => {
		return str
			.split('')
			.filter((_, idx) => !indexes.includes(idx))
			.join('')
	}
	const removed = removeChars(originalString, [3, 6, 9])

	// 4. Додати " (modified)" до кінця рядка
	const modified = originalString + ' (modified)'

	// 5. Чи рядок порожній?
	const isEmpty = originalString.length === 0

	// 6. Додати символ "." до кінця
	const withDot = originalString.endsWith('.')
		? originalString
		: originalString + '.'

	// 7. Чи починається з "Hello"
	const startsWithHello = originalString.startsWith('Hello')

	// 8. Чи закінчується на "world."
	const endsWithWorld = originalString.endsWith('world.')

	// 9. Вставити "-" після 10-го символа (індекс 9)
	const insertAfterIndex = (str, index, insertStr) =>
		str.slice(0, index + 1) + insertStr + str.slice(index + 1)
	const inserted = insertAfterIndex(originalString, 9, '-')

	// 10. Замінити "Thus us" на "It is" (але в рядку немає "Thus us", скоріш за все опечатка, має бути "This is")
	const replacedSub = originalString.replace('This is', 'It is')

	// 11. Вивести 10-й та 15-й символи (індекси 9 та 14)
	const char10 = originalString[9] || '(немає)'
	const char15 = originalString[14] || '(немає)'

	// 12. Підрядок від 10-го (вкл) до 15-го (не вкл)
	const substring10to15 = originalString.slice(9, 15)

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>Завдання 3 — Робота з рядками</Text>

			<Text style={styles.item}>1. Довжина рядка:</Text>
			<Text style={styles.value}>{length}</Text>

			<Text style={styles.item}>2. Замінити "i" на "u":</Text>
			<Text style={styles.value}>{replacedI}</Text>

			<Text style={styles.item}>3. Видалити 4-й, 7-й, 10-й символи:</Text>
			<Text style={styles.value}>{removed}</Text>

			<Text style={styles.item}>4. Додати "(modified)":</Text>
			<Text style={styles.value}>{modified}</Text>

			<Text style={styles.item}>5. Чи рядок порожній:</Text>
			<Text style={styles.value}>{isEmpty ? 'Так' : 'Ні'}</Text>

			<Text style={styles.item}>6. Додати "." до кінця:</Text>
			<Text style={styles.value}>{withDot}</Text>

			<Text style={styles.item}>7. Починається з "Hello":</Text>
			<Text style={styles.value}>{startsWithHello ? 'Так' : 'Ні'}</Text>

			<Text style={styles.item}>8. Закінчується на "world.":</Text>
			<Text style={styles.value}>{endsWithWorld ? 'Так' : 'Ні'}</Text>

			<Text style={styles.item}>9. Вставити "-" після 10-го символа:</Text>
			<Text style={styles.value}>{inserted}</Text>

			<Text style={styles.item}>10. Замінити "This is" → "It is":</Text>
			<Text style={styles.value}>{replacedSub}</Text>

			<Text style={styles.item}>11. 10-й та 15-й символи:</Text>
			<Text style={styles.value}>
				10-й: {char10} | 15-й: {char15}
			</Text>

			<Text style={styles.item}>12. Підрядок 10–15:</Text>
			<Text style={styles.value}>{substring10to15}</Text>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: '#f9f9f9',
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		marginBottom: 20,
		textAlign: 'center',
	},
	item: {
		fontSize: 16,
		fontWeight: '600',
		marginTop: 10,
	},
	value: {
		fontSize: 16,
		color: '#333',
		marginTop: 4,
		marginBottom: 8,
	},
})
