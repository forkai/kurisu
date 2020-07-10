//******** 其它********

// 获取变量类型
const getType = val => Object.prototype.toString.call(val)

// 过滤表单的emoji表情
const filterEmoji = str => {
	const re = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi
	return str.replace(re, '')
}

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

// 事件池
class Event {
	constructor() {
		this.events = {}
	}
	//监听
	on(eventName, callBack) {
		if (this.events[eventName]) {
			//存在事件
			this.events[eventName].push(callBack)
		} else {
			//不存在事件
			this.events[eventName] = [callBack]
		}
	}
	//触发
	emit(eventName, params) {
		if (this.events[eventName]) {
			this.events[eventName].map(callBack => {
				callBack(params)
			})
		}
	}
}

export { filterEmoji, getNum, timeTaken, delay, Event, getType }
