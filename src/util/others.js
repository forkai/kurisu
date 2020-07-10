//******** 其它********

// 获取变量类型
const getType = val => Object.prototype.toString.call(val)

// 获取某个函数的运行时间
const timeTaken = callback => {
	console.time('timeTaken')
	const r = callback()
	console.timeEnd('timeTaken')
	return r
}

// 延迟运行
const delay = time =>
	new Promise(r => {
		setTimeout(r, time)
	})

// 提取数字
const getNum = str => str.match(/[0-9]+/g)

// 生成指定长度的有序整数数字数组
// 0-100
const getNumArr = len =>
	Array(len)
		.fill('')
		.map(el => ~~(Math.random() * 100))

module.exports = {
	timeTaken,
	getNumArr,
}

export { filterEmoji, getNum, timeTaken, delay, Event, getType }
