//********** 缓存 *********

import { isNil, isJsonString } from './is'

/** sessionStorage和localStorage */
const simplify = type => {
	/** localStorage和sessionStorage的API相同 */
	const storage = type == 'session' ? localStorage : sessionStorage
	return {
		/** 获取全部内容 */
		getAll() {
			return storage
		},

		/** 查询长度 */
		length() {
			return storage.length
		},

		/** 清空 */
		clear() {
			storage.clear()
		},

		/** 是否包含某个 */
		has(name) {
			return storage.getItem(name) ? true : false
		},

		/** 删除SessionStorage，可以传入多个参数 */
		remove() {
			let arr = [].slice.call(arguments, 0)
			arr.forEach(function (el) {
				storage.removeItem(el)
			})
			console.log(storage)
		},

		/** 迭代 */
		forEach(callback){
			for (let key in storage) {
				callback(storage.getItem(key))
			}
		},

		/** 设置storage的数据，如果是对象自动转成JSON */
		set(name, val) {
			try {
				let saveVal = isJsonString(JSON.stringify(val))
					? JSON.stringify(val)
					: val
				storage.setItem(name, saveVal)
				console.log(storage)
			} catch (err) {
				console.error(err)
			}
		},

		/** 获取storage的数据，如果是JSON自动转成对象 */
		get(name) {
			let data = storage.getItem(name)
			return isJsonString(data) ? JSON.parse(data) : data
		},
	}
}

/** cookie */
const cookie = {
	/** 返回所有 cookie 的 name-value 对的对象 */
	getAll() {
		document.cookie
			.split(';')
			.map(v => v.split('='))
			.reduce((acc, v) => {
				acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(
					v[1].trim()
				)
				return acc
			}, {})
	},

	/** 写cookies */
	set(name, val, seconds) {
		/** 值不存在写入失败，防止写入 'null' */
		if (isNil(val)) return
		/** 默认有效一小时 */
		seconds = seconds || 60 * 60
		let exp = new Date()
		exp.setTime(exp.getTime() + seconds * 1000)
		document.cookie =
			name + '=' + escape(val) + ';expires=' + exp.toGMTString()
	},

	/** 读取cookies */
	get(name) {
		let arr,
			re = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
		return (arr = document.cookie.match(re)) ? unescape(arr[2]) : null
	},

	/** 删除cookies，可以传入多个参数 */
	remove() {
		let exp = new Date()
		exp.setTime(exp.getTime() - 1)
		let arr = [].slice.call(arguments, 0)
		arr.forEach(el => {
			let cval = getCookie(el)
			if (cval != null)
				document.cookie =
					el + '=' + cval + ';expires=' + exp.toGMTString()
		})
		console.log(document.cookie)
	},

	/** 将 cookie name-value 对序列化为 Set-Cookie 头字符串 */
	serialize(name, val) {
		return `${encodeURIComponent(name)}=${encodeURIComponent(val)}`
	},
}

/** localStorage */
const storage = {
	/** localStorage的方法 */
	...{ simplify() },
	/** sessionStorage的方法 */
	session: simplify('session'),
	cookie,
}

export { storage }
