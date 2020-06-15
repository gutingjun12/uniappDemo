'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async getUsers() {
		const { ctx } = this;
		var res = await ctx.service.user.getUser();
		console.log(res);
		ctx.body = {"data":res};
  }
	
	// async add() {
	// 	const { ctx } = this;
	// 	var date = (new Date()).getTime();
	// 	var obj = {
	// 		name: '哈哈'+date,
	// 		age: 10
	// 	};
	// 	await ctx.service.user.addUser(obj);
	// 	ctx.body = '已插入一条数据';
	// }
	
	// async remove() {
	// 	const { ctx } = this;
	// 	var obj = {name: '哈哈'};
	// 	await ctx.service.user.removeUser(obj);
	// 	ctx.body = '已删除name为哈哈的数据';
	// }
	
	// async update() {
	// 	const { ctx } = this;
	// 	var obj = {name: '大头儿'};
	// 	await ctx.service.user.updateUser(obj);
	// 	ctx.body = '已更新name数据';
	// }

}

module.exports = UserController;
