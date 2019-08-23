//*********** 判断设备 *********

// 判断是否是微信浏览器
const isWxBrowser = () => {
	let ua = navigator.userAgent.toLowerCase()
	return ua.match(/MicroMessenger/i) == 'micromessenger' ? true : false
}

// 判断是否是ios
const isIOS = () => {
	const re = /(iPhone|iPad|iPod|iOS)/i
	return re.test(navigator.userAgent) ? true : false
}

// 判断是否是Android
const isAndroid = () => {
	const re = /(Android)/i
	return re.test(navigator.userAgent) ? true : false
}

//*********** 判断格式 *********

// 判断手机号是否合法
const isPhoneLegal = val => {
	const re = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
	return re.test(val) ? true : false
}

// 判断验证码是否合法
const isCodeLegal = val => {
	const re = /^[0-9]{4}$/
	return re.test(val) ? true : false
}

/**
 * 判断邮箱是否合法
 * @param {String} email
 */
const isEmailLegal = email => {
	const re = /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i
	return re.exec(email) == null ? false : true
}

/*判断身份证是否合法*/
const isIdLegal = id => {
	const re = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/
	return re.test(id)
}

/*判断密码是否合法*/
const isPasswordLegal = password => {
	const re = /[A-Za-z0-9]{6,14}/
	return re.test(password)
}

//*********** 数据类型 *********

// 判断是否是JSON字符串
const isJsonString = str => {
	try {
		if (typeof JSON.parse(str) == 'object') {
			return true
		}
	} catch (err) {
		console.error(err)
		return false
	}
}

// 判断输入的内容是否为空
// val ==null的时候，val === undefined 会报错
const isNil = val => {
	return typeof val === 'undefined' || val === null || val === ''
		? true
		: false
}

export {
	isAndroid,
	isCodeLegal,
	isEmailLegal,
	isIOS,
	isIdLegal,
	isJsonString,
	isNil,
	isPasswordLegal,
	isPhoneLegal,
	isWxBrowser,
}
