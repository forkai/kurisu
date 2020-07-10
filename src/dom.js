/** 复制字符串到剪贴板 */
const copy = (text = '') => {
	const input = document.createElement('input')
	input.setAttribute('value', text)
	// 需要先选中
	input.select()
	if (document.execCommand('copy')) console.log('复制成功')
}

/* 下载传入的字符串 */
const download = (content = '') => {
	const blob = new Blob([content], 'text/plain')
	const a = document.createElement('a')
	Object.assign(a, {
		href: URL.createObjectURL(blob),
		download: true,
	})
	a.click()
}

/* 传入函数创建 web worker*/
class WebWorker {
	constructor(worker = function () {}) {
		const code = worker.toString()
		const blob = new Blob(['(' + code + ')()'])
		return new Worker(URL.createObjectURL(blob))
	}
}

export { copy, WebWorker, download }
