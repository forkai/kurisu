//******** 其它********

// 过滤表单的emoji表情
const filterEmoji = str => {
	const re = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi
	return str.replace(re, '')
}

// 获取倒计时
const countdown = (date, compareDate) => {
	//时间格式是时间戳
	compareDate = compareDate ? new Date(compareDate) : new Date()
	let time = compareDate.getTime() / 1000
	let endTime = new Date(date).getTime() / 1000
	let lag = endTime - time
	return {
		lag: lag,
		day: Math.floor(lag / 3600 / 24),
		hour: Math.floor((lag / 3600) % 24),
		minute: Math.floor((lag / 60) % 60),
		second: Math.floor(lag % 60),
	}
}

// 获取某个函数的运行时间
const timeTaken = callback => {
	console.time('timeTaken')
	const r = callback()
	console.timeEnd('timeTaken')
	return r
}

// 提取数字
const getNum = str => str.match(/[0-9]+/g)

export { countdown, filterEmoji, getNum, timeTaken }
