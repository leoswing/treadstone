// 手机号正则表达式
function checkPhone(phone) {
  if (!(/^1[34578]\d{9}$/.test(phone))) {
  	alert('wrong phone number');
  	return false;
  }
}

// 去掉字符串前后多余的空格
var string = ' a b c ';
string.replace(/^\s+|\s+$/g, '');


// 使用对象查找字符串中出现次数最多的字符
// 主要是使用对象
var str = 'abceddddzhaofffwi';
var o = {};
for (var i = 0, len = str.length; i < len; i++) {
	var char = str.charAt(i);
	// char就是对象o的一个属性， o[char]是属性值， o[char]控制出现的次数
	if (o[char]) {
		o[char]++;
	} else {
		// 若第一次出现，记次数为1
		o[char] = 1;
	}
}
console.log(o); // 输出的是完整的对象，记录着每一个字符及其出现的次数
// 遍历对象，找到出现最多的字符和次数
var max = 0;
var maxChar = null;
for (var key in o) {
	if (max < o[key]) {
	  max = o[key];
	}
}

for (var key in o) {
	if (o[key] === max) {
		console.log('the character' + key);
	}
}

// 关于正则表达式 非捕获组 (?:x) 不返回该组匹配的内容
// x(?=y)先行断言
// x(?!y)先行否定断言
// 
// thousand format
function formatThousandSep(input) {
	if (isNaN(input)) {
		return input;
	} else {
		var translateStr = '';
		var reg = /(\d{1,3})(?=(\d{3})+(?:$|\.))/g;
		translateStr = input.toString().replace(reg, '$1,');
		return translateStr;
	}
}

console.log(formatThousandSep(2004500));
