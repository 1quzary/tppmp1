import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'

export default function FirstScreen() {
	// 1. Масив з 10 перших чисел Фібоначчі
	const fibArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

	// 2. Масив у зворотному порядку
	const revArray = [...fibArray].reverse()

	// 3. Масив простих чисел ≤ 100
	const snglArray = []
	for (let i = 2; i <= 100; i++) {
		let prime = true
		for (let j = 2; j <= Math.sqrt(i); j++) {
			if (i % j === 0) {
				prime = false
				break
			}
		}
		if (prime) snglArray.push(i)
	}

	// 4. Кількість елементів snglArray
	const countSngl = snglArray.length

	// 5. 10-й елемент (індекс 9)
	const tenthSngl = snglArray[9] // якщо масив має >=10 елементів

	// 6. Підмасив з 15-го по 20-й (індекси 14–19)
	const subSngl = snglArray.slice(14, 20)

	// 7. Масив із 10 копій 10-го елемента
	const rptArray = Array(10).fill(tenthSngl)

	// 8. Ініціалізувати oddArray непарними числами між 0 і 10
	let oddArray = [1, 3, 5, 7, 9] // початковий стан

	// збережемо стан після пункту 8
	const after8 = [...oddArray]

	// 9. Додати число 11
	oddArray.push(11)
	const after9 = [...oddArray]

	// 10. Додати 15, 17, 19 як підмасив
	oddArray.push(...[15, 17, 19])
	const after10 = [...oddArray]

	// 11. Вставити 13 між 11 та 15
	const idx11 = oddArray.indexOf(11)
	let insertedAt11 = -1
	if (idx11 !== -1) {
		oddArray.splice(idx11 + 1, 0, 13) // вставили 13 після 11
		insertedAt11 = idx11 + 1
	}
	const after11 = [...oddArray]

	// 12. Видалити елементи, починаючи з 5-го та закінчуючи 8-им (невключно)
	const removedFrom12 = oddArray.splice(4, 3) // повертає масив видалених елементів
	const after12 = [...oddArray]

	// 13. Видалити останній елемент масиву oddArray та вивести його
	const lastRemoved = oddArray.pop()
	const after13 = [...oddArray]

	// 14. Замінити елементи масиву oddArray, починаючи з 2-го та закінчуючи останнім, на масив [2,3,4]. "2-й" = індекс 1. Ми замінюємо елементи від індексу 1 до кінця.
	oddArray.splice(1, oddArray.length - 1, 2, 3, 4)
	const after14 = [...oddArray]

	// 15. Видалити елемент, що рівний числу 3
	const idx3 = oddArray.indexOf(3)
	let removed15 = null
	if (idx3 !== -1) {
		removed15 = oddArray.splice(idx3, 1)[0]
	}
	const after15 = [...oddArray]

	// 16. Чи міститься число 3 у масиві oddArray
	const contains3 = oddArray.includes(3)

	// 17. Рядкове представлення масиву oddArray
	const oddArrayString = oddArray.toString()

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>Завдання 1 — Робота з масивами</Text>

			<Text style={styles.item}>1. fibArray (10 перших Фібоначчі):</Text>
			<Text style={styles.value}>{fibArray.join(', ')}</Text>

			<Text style={styles.item}>2. revArray (reverse fibArray):</Text>
			<Text style={styles.value}>{revArray.join(', ')}</Text>

			<Text style={styles.item}>3. snglArray (простi ≤ 100):</Text>
			<Text style={styles.value}>{snglArray.join(', ')}</Text>

			<Text style={styles.item}>4. Кількість елементів snglArray:</Text>
			<Text style={styles.value}>{String(countSngl)}</Text>

			<Text style={styles.item}>5. 10-й елемент snglArray:</Text>
			<Text style={styles.value}>{String(tenthSngl)}</Text>

			<Text style={styles.item}>6. Підмасив snglArray (15–20):</Text>
			<Text style={styles.value}>{subSngl.join(', ')}</Text>

			<Text style={styles.item}>7. rptArray (10 копій 10-го простого):</Text>
			<Text style={styles.value}>{rptArray.join(', ')}</Text>

			<Text style={styles.item}>8. oddArray початковий (непарні 0–10):</Text>
			<Text style={styles.value}>{after8.join(', ')}</Text>

			<Text style={styles.item}>9. oddArray після додавання 11:</Text>
			<Text style={styles.value}>{after9.join(', ')}</Text>

			<Text style={styles.item}>10. oddArray після додавання [15,17,19]:</Text>
			<Text style={styles.value}>{after10.join(', ')}</Text>

			<Text style={styles.item}>11. oddArray після вставки 13 (позиція):</Text>
			<Text style={styles.value}>
				{after11.join(', ')}
				{'\n'}
				{insertedAt11 !== -1
					? `13 вставлено на індекс ${insertedAt11}`
					: '11 не знайдено — вставка не виконана'}
			</Text>

			<Text style={styles.item}>
				12. Видалені елементи (п.12) — що було видалено:
			</Text>
			<Text style={styles.value}>
				{removedFrom12.length
					? removedFrom12.join(', ')
					: '(нічого не видалено)'}
			</Text>
			<Text style={styles.item}>oddArray після п.12:</Text>
			<Text style={styles.value}>{after12.join(', ')}</Text>

			<Text style={styles.item}>13. Видалений останній елемент (п.13):</Text>
			<Text style={styles.value}>
				{lastRemoved !== undefined ? String(lastRemoved) : '(масив порожній)'}
			</Text>
			<Text style={styles.item}>oddArray після п.13:</Text>
			<Text style={styles.value}>{after13.join(', ')}</Text>

			<Text style={styles.item}>
				14. Після заміни з 2-го до останнього на [2,3,4]:
			</Text>
			<Text style={styles.value}>{after14.join(', ')}</Text>

			<Text style={styles.item}>15. Видалено елемент, рівний 3:</Text>
			<Text style={styles.value}>
				{removed15 !== null ? String(removed15) : '(елемент 3 не знайдено)'}
			</Text>
			<Text style={styles.item}>oddArray після п.15:</Text>
			<Text style={styles.value}>{after15.join(', ')}</Text>

			<Text style={styles.item}>16. Чи міститься число 3 зараз:</Text>
			<Text style={styles.value}>{String(contains3)}</Text>

			<Text style={styles.item}>17. Рядкове представлення oddArray:</Text>
			<Text style={styles.value}>{oddArrayString}</Text>

			<Text style={{ height: 30 }} />
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 22,
		marginBottom: 12,
		fontWeight: '600',
		textAlign: 'center',
	},
	item: {
		marginTop: 10,
		fontWeight: '700',
	},
	value: {
		marginTop: 4,
		color: '#222',
		lineHeight: 20,
	},
})
