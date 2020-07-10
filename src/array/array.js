/* 获取数组平均值 */
/* arr.reduce((iter, val) => {
	if(val in obj) {
		iter[val] = obj[val];
		}
			return iter;
			}, {}); */
const getAvg = (...rest) => {
	return rest.reduce((pre, cur) => pre + cur) / rest.length
}

/* 获取指定长度的数组 */
// const newArr = (length = 0) =>Array(length).fill(undefined).map((el, idx) => idx)
const getArray = (length = 0) => Array.of({ length }).map((el, idx) => idx)

/* 获取随机数组 */
const getRandomArr = (length = 0) => {
	const getRandomNum = arr => {
		num = ~~(Math.random() * 30 + 2)
		return arr.includes(num) ? getRandomNum(arr) : num
	}
	return getArray(length).map((el, idx, arr) => getRandomNum(arr))
}

export { getAvg, getRandomArr, getArray }
