//********** 缓存 *********

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
	console.log(document.cookie)
}

// 删除SessionStorage，可以传入多个参数
const delSessionStorage = () => {
	let arr = [].slice.call(arguments, 0)
	arr.forEach(function(el) {
		sessionStorage.removeItem(el)
	})
	console.log(sessionStorage)
}

// 设置SessionStorage的数据，如果是对象自动转成JSON
const addSessionStorage = (name, val) => {
	try {
		saveVal = isJsonString(JSON.stringify(val)) ? JSON.stringify(val) : val
		sessionStorage.setItem(name, saveVal)
		console.log(sessionStorage)
	} catch (err) {
		console.error(err)
		console.log('设置setSessionStorage失败')
	}
}

// 获取SessionStorage的数据，如果是JSON自动转成对象
const getSessionStorage = name => {
	let data = sessionStorage.getItem(name)
	return isJsonString(data) ? JSON.parse(data) : data
}

export {
	addSessionStorage,
	delCookie,
	delSessionStorage,
	getCookie,
	getSessionStorage,
	setCookie,
}
