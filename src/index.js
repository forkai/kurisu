const { log, error, time, timeEnd } = console,
	{ round, random, floor } = Math,
	{ userAgent } = navigator

//********** 1缓存 *********

// 写cookies
const setCookie = (name, val, seconds) => {
	// 值不存在写入失败，防止写入 'null'
	if (isNil(val)) return
	// 默认有效一小时
	seconds = seconds || 60 * 60
	let exp = new Date()
	exp.setTime(exp.getTime() + seconds * 1000)
	document.cookie = name + '=' + escape(val) + ';expires=' + exp.toGMTString()
}

// 读取cookies
const getCookie = name => {
	let arr,
		re = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
	return (arr = document.cookie.match(re)) ? unescape(arr[2]) : null
}

// 删除cookies，可以传入多个参数
const delCookie = () => {
	let exp = new Date()
	exp.setTime(exp.getTime() - 1)
	let arr = [].slice.call(arguments, 0)
	arr.forEach(el => {
		let cval = getCookie(el)
		if (cval != null)
			document.cookie = el + '=' + cval + ';expires=' + exp.toGMTString()
	})
	log(document.cookie)
}

// 删除SessionStorage，可以传入多个参数
const delSessionStorage = () => {
	let arr = [].slice.call(arguments, 0)
	arr.forEach(function(el) {
		sessionStorage.removeItem(el)
	})
	log(sessionStorage)
}

// 设置SessionStorage的数据，如果是对象自动转成JSON
const addSessionStorage = (name, val) => {
	try {
		saveVal = isJsonString(JSON.stringify(val)) ? JSON.stringify(val) : val
		sessionStorage.setItem(name, saveVal)
		log(sessionStorage)
	} catch (err) {
		error(err)
		log('设置setSessionStorage失败')
	}
}

// 获取SessionStorage的数据，如果是JSON自动转成对象
const getSessionStorage = name => {
	let data = sessionStorage.getItem(name)
	return isJsonString(data) ? JSON.parse(data) : data
}

//*********** 2判断 *********

// 判断是否是微信浏览器
const isWxBrowser = () => {
	let ua = userAgent.toLowerCase()
	return ua.match(/MicroMessenger/i) == 'micromessenger' ? true : false
}

// 判断是否是ios
const isIOS = () => {
	const re = /(iPhone|iPad|iPod|iOS)/i
	return re.test(userAgent) ? true : false
}

// 判断是否是Android
const isAndroid = () => {
	const re = /(Android)/i
	return re.test(userAgent) ? true : false
}

// 判断输入的内容是否为空
// val ==null的时候，val === undefined 会报错
const isNil = val => {
	return typeof val === 'undefined' || val === null || val === ''
		? true
		: false
}

// 判断是否是JSON字符串
const isJsonString = str => {
	try {
		if (typeof JSON.parse(str) == 'object') {
			return true
		}
	} catch (err) {
		error(err)
		return false
	}
}

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

//******** 3 url********

// 获取URL地址参数
const getQueryString = (name, url) => {
	const re = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
	url = !url || url == '' ? location.search : url.substring(url.indexOf('?'))
	r = url.substr(1).match(re)
	return r != null ? unescape(r[2]) : null
}

// 获取html页面名
const getHtmlDocName = () => {
	let str = location.href
	str = str.substring(str.lastIndexOf('/') + 1)
	str = str.substring(0, str.lastIndexOf('.'))
	return str
}

// 页面刷新，添加时间戳，有些安卓手机在微信中location.reload()失效
const reloadPage = () => {
	// 判断是否有页面有参数
	let queryStr = location.href.indexOf('?') > 0 ? '&' : '?'
	location.href += queryStr + 't=' + new Date().getTime()
}

//******** 4 其它********

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
	let end_time = new Date(date).getTime() / 1000
	let lag = end_time - time
	return {
		lag: lag,
		day: floor(lag / 3600 / 24),
		hour: floor((lag / 3600) % 24),
		minute: floor((lag / 60) % 60),
		second: floor(lag % 60)
	}
}

// 获取某个函数的运行时间
const timeTaken = callback => {
	time('timeTaken')
	const r = callback()
	timeEnd('timeTaken')
	return r
}

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
		tmp += str.charAt(round(random() * str.length))
	}
	return tmp
}

// 提取数字
const getNum = str => str.match(/[0-9]+/g)

export {
	addSessionStorage,
	countdown,
	delCookie,
	delSessionStorage,
	filterEmoji,
	getCookie,
	getHtmlDocName,
	getNum,
	getQueryString,
	getSessionStorage,
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
	randomStr,
	reloadPage,
	setCookie,
	sliceStr,
	timeTaken
}
