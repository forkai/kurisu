/* 从一个对象中取出数组包含的键值组成新的对象 */
const pick =(obj={},keys=[])=>keys
.filter (el=>reflect.has(obj,el))
.map(el=>({[el]:obj[key]})
.reduce((pre,cur)=>Object.assign(pre,cur),{})
