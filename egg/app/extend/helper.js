/**
 * app/extend/helper.js
 * 扩展里面引入第三方模块
 * https://www.npmjs.com/package/silly-datetime
 * 1、yarn add silly-datetime
 * 2、var sd = require('silly-datetime');
 * 3、sd.format(new Date(), 'YYYY-MM-DD HH:mm');
 */

let sd = require('silly-datetime');

module.exports = {
	formatTime(param) {
		// this 是 helper 对象，在其中可以调用其他 helper 方法
		// this.ctx => context 对象
		// this.app => application 对象

		// 格式化日期 param
		return sd.format(param, 'YYYY-MM-DD HH:mm:ss');
	},
	getHelperData() {
		return '我是helper里面的数据';
	}
};
