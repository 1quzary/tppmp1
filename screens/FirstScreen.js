import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
{
	/*Лабораторна 1*/
}
{
	/*
export default function FirstScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Hello World!</Text>
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
	*/
}

{
	/*Лабораторна 2*/
}
export default function FirstScreen({ navigation }) {
	// 1. Масив з 10 перших чисел Фібоначчі
	const fibArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

	// 2. Масив у зворотному порядку
	const revArray = [...fibArray].reverse()

	// 3. Масив простих чисел ≤ 100
	const snglArray = []
	for (let i = 2; i <= 100; i++) {
		let prime = true
		for (let j = 2; j <= Math.sqrt(i); j++) {
			if (i % j === 0) prime = false
		}
		if (prime) snglArray.push(i)
	}

	// 4. Кількість елементів snglArray
	const countSngl = snglArray.length

	// 5. 10-й елемент (індекс 9)
	const tenthSngl = snglArray[9]

	// 6. Підмасив з 15-го по 20-й (індекси 14–19)
	const subSngl = snglArray.slice(14, 20)

	// 7. Масив із 10 копій 10-го елемента
	const rptArray = Array(10).fill(tenthSngl)

	// 8. Масив непарних чисел 0–10
	let oddArray = [1, 3, 5, 7, 9]

	// 9. Додати число 11
	oddArray.push(11)

	// 10. Додати 15, 17, 19 як підмасив
	oddArray.push(...[15, 17, 19])

	// 11. Вставити 13 між 11 та 15
	oddArray.splice(oddArray.indexOf(11) + 1, 0, 13)

	// 12. Видалити елементи 5-го до 8-го (індекси 4–7)
	oddArray.splice(4, 3)

	// 13. Видалити останній елемент і вивести його
	const lastRemoved = oddArray.pop()

	// 14. Замінити елементи з 2-го до останнього на [2,3,4]
	oddArray.splice(1, oddArray.length - 1, ...[2, 3, 4])

	// 15. Видалити елемент, що дорівнює 3
	const idx3 = oddArray.indexOf(3)
	if (idx3 !== -1) oddArray.splice(idx3, 1)

	// 16. Перевірити, чи залишилось число 3
	const contains3 = oddArray.includes(3)

	// 17. Рядкове представлення масиву
	const oddArrayString = oddArray.toString()

	return (
		<ScrollView style={styles.container}>
			<Text style={styles.title}>Завдання 1</Text>

			<Text>1. fibArray: {results.fibArray.join(', ')}</Text>
			<Text>2. revArray: {results.revArray.join(', ')}</Text>
			<Text>3. snglArray: {results.snglArray.join(', ')}</Text>
			<Text>4. Кількість простих: {results.countSngl}</Text>
			<Text>5. 10-й елемент: {results.tenthSngl}</Text>
			<Text>6. 15–20 елементи: {results.subSngl.join(', ')}</Text>
			<Text>7. rptArray: {results.rptArray.join(', ')}</Text>
			<Text>8–15. oddArray: {results.oddArray.join(', ')}</Text>
			<Text>13. Видалений останній: {results.lastRemoved}</Text>
			<Text>16. Чи містить 3: {String(results.contains3)}</Text>
			<Text>17. Рядкове представлення: {results.oddArrayString}</Text>
		</ScrollView>
	)
}

const styles = StyleSheet.create({})

{
	/*Лабораторна 3*/
}
{
	/*
export default function FirstScreen({ navigation }) {}

const styles = StyleSheet.create({})
	*/
}
