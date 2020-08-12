import getType from './type'
/**
 * 深拷贝
 * @param {*} data 
 */
const clone = (data) => {
	var type = getType(data);
	var obj;
	if (type === 'array') {
		obj = [];
	} else if (type === 'object') {
		obj = {};
	} else {
		return data;
	}
	if (type === 'array') {
		for (var i = 0, len = data.length; i < len; i++) {
			obj.push(clone(data[i]));
		}
	} else if (type === 'object') {
		for (var key in data) {
			obj[key] = clone(data[key]);
		}
	}
	return obj;
}

export default clone