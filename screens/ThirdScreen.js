import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'

export default function ThirdScreen() {
	// 1. Створюємо Map nDict з ключами "1"-"5" та значеннями англійськими числами
	const nDict = new Map([
		['1', 'One'],
		['2', 'Two'],
		['3', 'Three'],
		['4', 'Four'],
		['5', 'Five'],
	])

	// 2. Значення за ключем "3"
	const valueKey3 = nDict.get('3')

	// 3. Значення за індексом ключа 4
	const keysArray = Array.from(nDict.keys())
	const valueAtIndex4 = nDict.get(keysArray[3])

	// 4. Mutable словник mNDict на основі nDict
	const mNDict = new Map(nDict)

	// 5. Додати елементи 6:Seven та 7:Six
	mNDict.set('6', 'Seven')
	mNDict.set('7', 'Six')
	const afterAdd67 = Array.from(mNDict.entries())

	// 6. Оновлення значень: 6:Six, 7:Seven, 8:Eight
	mNDict.set('6', 'Six')
	mNDict.set('7', 'Seven')
	mNDict.set('8', 'Eight')
	const afterUpdate678 = Array.from(mNDict.entries())

	// 7. Видалити ключ "5"
	mNDict.delete('5')
	const afterDelete5 = Array.from(mNDict.entries())

	// 8. Видалити елемент за індексом ключа 4
	const keyIndex4 = Array.from(mNDict.keys())[3]
	mNDict.delete(keyIndex4)
	const afterDeleteIndex4 = Array.from(mNDict.entries())

	// 9. Відстань між 1:One та 7:Seven
	const entriesArray = Array.from(mNDict.entries())
	const index1One = entriesArray.findIndex(([k, v]) => k === '1' && v === 'One')
	const index7Seven = entriesArray.findIndex(
		([k, v]) => k === '7' && v === 'Seven'
	)
	const distance =
		index1One !== -1 && index7Seven !== -1
			? Math.abs(index7Seven - index1One)
			: null

	// 10. Масив ключів
	const mNDictKeys = Array.from(mNDict.keys())

	// 11. Масив значень
	const mNDictValues = Array.from(mNDict.values())

	// 12. Кількість елементів, ключів, значень
	const dictLength = mNDict.size
	const dictKeysCount = mNDictKeys.length
	const dictValuesCount = mNDictValues.length

	// 13. Рядкове представлення словника
	const dictString = JSON.stringify(Object.fromEntries(mNDict))

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>Завдання 3 — Робота зі словниками (Map)</Text>

			<Text style={styles.item}>
				1. nDict: {JSON.stringify(Object.fromEntries(nDict))}
			</Text>
			<Text style={styles.item}>2. Значення за ключем "3": {valueKey3}</Text>
			<Text style={styles.item}>
				3. Значення за індексом ключа 4: {valueAtIndex4}
			</Text>
			<Text style={styles.item}>
				4. mNDict (копія nDict): {JSON.stringify(Object.fromEntries(mNDict))}
			</Text>
			<Text style={styles.item}>
				5. Після додавання 6:Seven, 7:Six:{' '}
				{JSON.stringify(Object.fromEntries(afterAdd67))}
			</Text>
			<Text style={styles.item}>
				6. Після оновлення 6:Six, 7:Seven, 8:Eight:{' '}
				{JSON.stringify(Object.fromEntries(afterUpdate678))}
			</Text>
			<Text style={styles.item}>
				7. Після видалення ключа "5":{' '}
				{JSON.stringify(Object.fromEntries(afterDelete5))}
			</Text>
			<Text style={styles.item}>
				8. Після видалення елемента за індексом ключа 4:{' '}
				{JSON.stringify(Object.fromEntries(afterDeleteIndex4))}
			</Text>
			<Text style={styles.item}>
				9. Відстань між 1:One та 7:Seven:{' '}
				{distance !== null ? distance : '(неможливо обчислити)'}
			</Text>
			<Text style={styles.item}>
				10. Ключі словника: {mNDictKeys.join(', ')}
			</Text>
			<Text style={styles.item}>
				11. Значення словника: {mNDictValues.join(', ')}
			</Text>
			<Text style={styles.item}>
				12. Кількість елементів: {dictLength}, ключів: {dictKeysCount}, значень:{' '}
				{dictValuesCount}
			</Text>
			<Text style={styles.item}>
				13. Рядкове представлення словника: {dictString}
			</Text>
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
	item: { marginTop: 6 },
})
