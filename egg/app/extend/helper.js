/**
 * app/extend/helper.js
 * 扩展里面引入第三方模块
 * 1、npm i silly-datetime --save
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
		let dateStr = sd.format(param, 'YYYY-MM-DD HH:mm:ss');
		let dateStr1 = Date.parse(new Date(dateStr));
		let dateStr2 = dateStr1/ 1000;

		let time0 = new Date().getTime();
		let time = parseInt((time0-dateStr2*1000)/1000);


		//存储转换值 
		let s;
		if (time < 60) { //一分钟内
			return '刚刚';
		} else if ((time < 3600) && (time >= 60)) {
			//超过一分钟少于1小时
			s = Math.floor(time / 60);
			return s + "分钟前";
		} else if ((time < 86400) && (time >= 3600)) {
			//超过1小时少于24小时
			s = Math.floor(time / 3600);
			return s + "小时前";
		} else if ((time < 259200) && (time >= 86400)) {
			//超过1天少于3天内
			s = Math.floor(time / 86400);
			return s + "天前";
		} else {
			//超过3天
			let returnDate = sd.format(param, 'YYYY-MM-DD');
			return returnDate;
		}


	}
};
