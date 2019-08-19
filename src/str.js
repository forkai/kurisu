// 截取字符串前几位，用于字符串太长时只显示一部分加省略号
const sliceStr = (str, n) => {
	if (str.length >= n) {
		let str = str.slice(0, n) + '...'
	}
	return str
}

// 生成指定长度的字符串
const randomStr = n => {
	let str = 'abcdefghijklmnopqrstuvwxyz0123456789'
	let tmp = ''
	for (let i = 0; i < n; i++) {
		tmp += str.charAt(Math.round(Math.random() * str.length))
	}
	return tmp
}

export { randomStr, sliceStr }
