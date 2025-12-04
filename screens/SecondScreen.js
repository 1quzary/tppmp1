import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'

export default function SetsScreen() {
	// 1. Опишіть множину chSet із символів a, b, c та d.
	const chSet = new Set(['a', 'b', 'c', 'd'])

	// 2. Створіть mutable множину mChSet на основі множити chSet.
	const mChSet = new Set(chSet)

	// 3. Виведіть на екран кількість елементів множини mChSet.
	const sizeMChSet = mChSet.size

	// 4. Вставте символ e в множину mChSet.
	mChSet.add('e')
	const afterAddE = Array.from(mChSet)

	// 5. Створіть множину srtChSet, яка є відсортованою версією множини mChSet.
	const srtChSet = new Set(Array.from(mChSet).sort())
	const srtChSetArr = Array.from(srtChSet)

	// 6. Видаліть з множини mChSet символ f та виведіть видалений символ на екран.
	// Якщо f не існує, повідомимо про це.
	let removedF = null
	if (mChSet.has('f')) {
		mChSet.delete('f')
		removedF = 'f'
	} else {
		removedF = '(символ "f" відсутній)'
	}
	const afterRemoveF = Array.from(mChSet)

	// 7. Видаліть символ d з множини mChSet за його індексом та виведіть рядкове представлення множини mChSet.
	const mChArrBefore = Array.from(mChSet)
	const idxD = mChArrBefore.indexOf('d')
	let removedByIndexD = null
	if (idxD !== -1) {
		const valToRemove = mChArrBefore[idxD]
		mChSet.delete(valToRemove)
		removedByIndexD = valToRemove
	} else {
		removedByIndexD = '(символ "d" не знайдено)'
	}
	const mChStringAfterIdxRemove = Array.from(mChSet).toString()

	// 8. Виведіть відстань у множині mChSet між першим елементом та символом a.
	const mChArrNow = Array.from(mChSet)
	const firstElem = mChArrNow[0]
	const idxA = mChArrNow.indexOf('a')
	let distanceFirstToA = null
	if (firstElem === undefined || idxA === -1) {
		distanceFirstToA = '(неможливо обчислити - елемент відсутній)'
	} else {
		distanceFirstToA = Math.abs(0 - idxA) // відстань (число позицій)
	}

	// 9. Вставте символ a в множину mChSet.
	// (якщо вже є - не змінить множину)
	mChSet.add('a')
	const afterReAddA = Array.from(mChSet)

	// 10. Опишіть множини aSet (One, Two, Three, 1, 2) та bSet (1, 2, 3, One, Two).
	const aSet = new Set(['One', 'Two', 'Three', 1, 2])
	const bSet = new Set([1, 2, 3, 'One', 'Two'])

	// 11. Створіть множину, яка містить всі спільні елементи для множин aSet та bSet. (intersection)
	const intersection = new Set(Array.from(aSet).filter(x => bSet.has(x)))

	// 12. Унікальні елементи: aSet \ bSet та bSet \ aSet
	const onlyA = new Set(Array.from(aSet).filter(x => !bSet.has(x)))
	const onlyB = new Set(Array.from(bSet).filter(x => !aSet.has(x)))

	// 13. Множина елементів, які не є спільними для aSet та bSet (симетрична різниця)
	const symDiff = new Set([...Array.from(onlyA), ...Array.from(onlyB)])

	// 14. Об'єднання всіх елементів aSet та bSet
	const unionAB = new Set([...Array.from(aSet), ...Array.from(bSet)])

	// 15. Опишіть множини xSet (2...4), ySet (1...6), zSet (3,4,2) та x1Set (5,6,7).
	const xSet = new Set([2, 3, 4])
	const ySet = new Set([1, 2, 3, 4, 5, 6])
	const zSet = new Set([3, 4, 2]) // порядок не важливий - рівна xSet
	const x1Set = new Set([5, 6, 7])

	// 16–20: допоміжні функції для перевірок
	const isSubset = (small, big) => Array.from(small).every(x => big.has(x))
	const isEqualSet = (s1, s2) =>
		s1.size === s2.size && Array.from(s1).every(x => s2.has(x))
	const isProperSubset = (s1, s2) => isSubset(s1, s2) && !isEqualSet(s1, s2)

	// 16. Чи xSet входить у ySet (тобто xSet subset of ySet), а також чи ySet входить у xSet
	const x_in_y = isSubset(xSet, ySet)
	const y_in_x = isSubset(ySet, xSet)

	// 17. Чи xSet містить ySet (superset) та чи ySet містить xSet
	const x_contains_y = isSubset(ySet, xSet) // x contains y <=> y subset of x
	const y_contains_x = isSubset(xSet, ySet)

	// 18. Чи xSet та zSet є рівними
	const x_eq_z = isEqualSet(xSet, zSet)

	// 19. Чи xSet входить у zSet, але не є рівною множині zSet (proper subset)
	const x_proper_in_z = isProperSubset(xSet, zSet)

	// 20. Чи xSet містить множину zSet, але не є рівною множині zSet (proper superset)
	const x_proper_contains_z = isProperSubset(zSet, xSet)

	// Для зручності перетворимо результати в рядки
	const showSet = s => `{ ${Array.from(s).join(', ')} }`

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>Завдання 2 - Робота з множинами</Text>

			<Text style={styles.item}>1. chSet (a,b,c,d):</Text>
			<Text style={styles.value}>{showSet(chSet)}</Text>

			<Text style={styles.item}>2. mChSet (копія chSet, mutable):</Text>
			<Text style={styles.value}>{showSet(new Set(mChSet))}</Text>

			<Text style={styles.item}>3. Розмір mChSet:</Text>
			<Text style={styles.value}>{String(sizeMChSet)}</Text>

			<Text style={styles.item}>4. Після вставки 'e' - mChSet:</Text>
			<Text style={styles.value}>{showSet(new Set(afterAddE))}</Text>

			<Text style={styles.item}>5. srtChSet (відсортовано):</Text>
			<Text style={styles.value}>{showSet(new Set(srtChSetArr))}</Text>

			<Text style={styles.item}>6. Спроба видалити 'f' - результат:</Text>
			<Text style={styles.value}>{removedF}</Text>
			<Text style={styles.item}>mChSet зараз:</Text>
			<Text style={styles.value}>{showSet(new Set(afterRemoveF))}</Text>

			<Text style={styles.item}>7. Видалити 'd' за індексом - видалено:</Text>
			<Text style={styles.value}>{String(removedByIndexD)}</Text>
			<Text style={styles.item}>mChSet (рядок) після видалення:</Text>
			<Text style={styles.value}>{mChStringAfterIdxRemove}</Text>

			<Text style={styles.item}>
				8. Відстань між першим елементом та 'a' (index difference):
			</Text>
			<Text style={styles.value}>{String(distanceFirstToA)}</Text>

			<Text style={styles.item}>9. Після вставки 'a' (mChSet):</Text>
			<Text style={styles.value}>{showSet(new Set(afterReAddA))}</Text>

			<Text style={styles.item}>10. aSet і bSet:</Text>
			<Text style={styles.value}>aSet: {showSet(aSet)}</Text>
			<Text style={styles.value}>bSet: {showSet(bSet)}</Text>

			<Text style={styles.item}>11. Спільні елементи (intersection):</Text>
			<Text style={styles.value}>{showSet(intersection)}</Text>

			<Text style={styles.item}>12. Унікальні елементи:</Text>
			<Text style={styles.value}>Тільки в aSet: {showSet(onlyA)}</Text>
			<Text style={styles.value}>Тільки в bSet: {showSet(onlyB)}</Text>

			<Text style={styles.item}>13. Нерівні (симетрична різниця):</Text>
			<Text style={styles.value}>{showSet(symDiff)}</Text>

			<Text style={styles.item}>14. Об'єднання aSet ∪ bSet:</Text>
			<Text style={styles.value}>{showSet(unionAB)}</Text>

			<Text style={styles.item}>15. xSet, ySet, zSet, x1Set:</Text>
			<Text style={styles.value}>xSet: {showSet(xSet)}</Text>
			<Text style={styles.value}>ySet: {showSet(ySet)}</Text>
			<Text style={styles.value}>zSet: {showSet(zSet)}</Text>
			<Text style={styles.value}>x1Set: {showSet(x1Set)}</Text>

			<Text style={styles.item}>
				16. xSet входить у ySet ? - {String(x_in_y)}
			</Text>
			<Text style={styles.item}> ySet входить у xSet ? - {String(y_in_x)}</Text>

			<Text style={styles.item}>
				17. xSet містить ySet ? - {String(x_contains_y)}
			</Text>
			<Text style={styles.item}>
				{' '}
				ySet містить xSet ? - {String(y_contains_x)}
			</Text>

			<Text style={styles.item}>18. xSet == zSet ? - {String(x_eq_z)}</Text>

			<Text style={styles.item}>
				19. xSet входить у zSet, але не рівна zSet (proper subset) ? -{' '}
				{String(x_proper_in_z)}
			</Text>

			<Text style={styles.item}>
				20. xSet містить zSet, але не рівна zSet (proper superset) ? -{' '}
				{String(x_proper_contains_z)}
			</Text>

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
