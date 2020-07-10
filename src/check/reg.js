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

const isPhoneLegal2 = str => {
	let reg = /^1[3-9][0-9]{9}$/
	return reg.test(str)
}

const isPhoneLegal3 = value => {
	let phoneTest = /^1[3456789]\d{9}$/
	if (phoneTest.test(value)) {
		return true
	} else {
		return false
	}
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

const isEmailLegal2 = str => {
	let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+\.(com|org|edu|net)/
	return reg.test(str)
}

function isEmailLegal3(obj) {
	let pattern = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,5}$/
	let flag = pattern.test(obj)
	return flag
}

const isEmailLegal4 = value => {
	let ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
	if (ePattern.test(value)) {
		return true
	} else {
		return false
	}
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


//************ 其它******** */
// 判断字符串是否大于规定的长度

function isValidLength(chars, len) {
    if (chars.length < len) {
        return false;
    }
    return true;
}

// 判断字符串是为网址不区分大小写

function isValidURL( chars ) {
    let re=/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(\S+\.\S+)$/;
    if (!isNULL(chars)) {
        chars = jsTrim(chars)
        if (chars.match(re) == null)
            return false;
        else
            return true;
    }
    return false;
}

// 判断字符串是否为小数

function isValidDecimal( chars ) {
    let re=/^\d*\.?\d{1,2}$/;
    if (chars.match(re) == null)
        return false;
    else
        return true;
}

// 判断字符串是否为整数

function isNumber( chars ) {
    let re=/^\d*$/;
    if (chars.match(re) == null)
        return false;
    else
        return true;
}

// 判断字符串是否为浮点数

function isFloat( str ) {
    for(let i=0;i<str.length;i++)  {
       if ((str.charAt(i)<"0" || str.charAt(i)>"9")&& str.charAt(i) != '.'){
            return false;
       }
    }
    return true;
}

// 判断字符是否为A-Za-z英文字母

function isLetters( str ){
    let re=/^[A-Za-z]+$/;
    if (str.match(re) == null)
        return false;
    else
        return true;
}

// 判断字符串是否邮政编码

function isValidPost( chars ) {
    let re=/^\d{6}$/;
    if (chars.match(re) == null)
        return false;
    else
        return true;
}

// 判断字符是否空NULL

function isNULL( chars ) {
    if (chars == null)
        return true;
    if (jsTrim(chars).length==0)
        return true;
    return false;
}




// 判断是否有列表中的危险字符

function isValidReg(chars){
    let re=/<|>|\[|\]|\{|\}|『|』|※|○|●|◎|§|△|▲|☆|★|◇|◆|□|▼|㊣|﹋|⊕|⊙|〒|ㄅ|ㄆ|ㄇ|ㄈ|ㄉ|ㄊ|ㄋ|ㄌ|ㄍ|ㄎ|ㄏ|ㄐ|ㄑ|ㄒ|ㄓ|ㄔ|ㄕ|ㄖ|ㄗ|ㄘ|ㄙ|ㄚ|ㄛ|ㄜ|ㄝ|ㄞ|ㄟ|ㄢ|ㄣ|ㄤ|ㄥ|ㄦ|ㄧ|ㄨ|ㄩ|■|▄|▆|\*|@|#|\^|\\/;
    if (re.test( chars) == true) {
        return false;
    }else{
        return true;
    }
}




/*验证是否带有小数*/
const isDecimal = str => {
	let objRegExp = /^\d+\.\d+$/
	return objRegExp.test(str)
}

/*验证是否纯中文 */
const isChinese = str => {
	let reg = /^[\u4E00-\u9FA5]{2,4}$/
	return reg.test(str)
}

/*验证电话码格式 */
const isTelNum = str => {
	let reg = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/
	return reg.test(str)
}



/*验证密码是否合法*/
const isLegalPassword = str => {
	let reg = /[A-Za-z0-9]{6,14}/
	return reg.test(str)
}

/*验证身份证是否合法*/
const isId = str => {
	let reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/
	return reg.test(str)
}

//过滤emoji
function filterEmoji(str) {
	var re = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/ig;
	return str.replace(re, "");
}

//过滤emoji2,不全
function filterEmoji2(str) {
	var re = ['\ud83c[\udf00-\udfff]', '\ud83d[\udc00-\ude4f]', '\ud83d[\ude80-\udeff]']; 1
	return str.replace(new RegExp(re.join('|'), 'g'), '');
}


// 提取页面代码中所有网址

let aa = document.documentElement.outerHTML.match(/(url\(|src=|href=)[\"\']*([^\"\'\(\)\<\>\[\] ]+)[\"\'\)]*|(http:\/\/[\w\-\.]+[^\"\'\(\)\<\>\[\] ]+)/ig).join("\r\n").replace(/^(src=|href=|url\()[\"\']*|[\"\'\>\) ]*$/igm,"")
alert(aa)

// 判断纳税人识别号
// 纳税人识别号 有15、18或者20位，判断了他们的长度是否符合

const judgeInvoiceNum=(value)=>{
    if(value.length == 15 || value.length == 18 || value.length == 20){
        return true;
    }else {
        return false;
    }
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
