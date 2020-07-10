//******** 3 url********

// 获取URL地址参数
const getQueryString = (name = '', url = '') => {
	const re = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
	url = !url || url == '' ? location.search : url.substring(url.indexOf('?'))
	r = url.substr(1).match(re)
	return r != null ? unescape(r[2]) : null
}

const getURLParameters = url =>
	url.match(/([^?=&]+)(=([^&]*))/g)
	.reduce((a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {})
let urlParameters = getURLParameters(location.href)
parameString = "";
for (key in urlParameters) {
	parameString += key + "=" + urlParameters[key] + "&";
}

// 拼接url和参数
const createURL = (url = '', paramsObject = {}) => {
	url += '?'
	Object.keys(paramsObject).forEach(key => {
		url += key + '=' + paramsObject[key] + '&'
	})
	return url.substring(0, url.lastIndexOf('&'))
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

export { getHtmlDocName, createURL, getQueryString, reloadPage }
