const getAvg = (...rest) => {
	return rest.reduce((pre, cur) => pre + cur) / rest.length
}

const getRandomArr = n => {
	const getRandomNum = arr => {
		num = ~~(Math.random() * 30 + 2)
		return arr.includes(num) ? getRandomNum(arr) : num
	}
	const newArr = Array(n)
		.fill('')
		.map((el, idx, arr) => getRandomNum(arr))
	return newArr
}

export { getAvg, getRandomArr }
