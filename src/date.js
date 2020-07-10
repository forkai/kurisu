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

export { countdown }
