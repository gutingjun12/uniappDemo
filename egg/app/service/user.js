'use strict';

const Service = require('egg').Service;

class UserService extends Service {
	// 通过手机号查找用户
	async findByPhone(phone) {
		const { ctx } = this;
		return await ctx.model.User.findOne({'phone': phone});
	}

	//添加用户
	async addUser(obj) {
		const { ctx } = this;
		let data = new ctx.model.User(obj);
		return await data.save();
	}

	// async removeUser(obj) {
	// 	const { ctx } = this;
	// 	return await ctx.model.User.remove(obj);
	// }
	
	// async updateUser(obj) {
	// 	const { ctx } = this;
	// 	var newAge = {age: 26}
	// 	return await ctx.model.User.update(obj, newAge);
	// }
	
}

module.exports = UserService;
