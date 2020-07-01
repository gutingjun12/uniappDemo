'use strict';

const Service = require('egg').Service;

class UserService extends Service {	
	// 查找用户
	async findUser(obj) {
		const { ctx } = this;
		return await ctx.model.User.find(obj);
	}

	//添加用户
	async addUser(obj) {
		const { ctx } = this;
		let data = new ctx.model.User(obj);
		return await data.save();
	}
	
	//更新用户信息
	async updateUser(id, newObj) {
		const { ctx } = this;
		return await ctx.model.User.findByIdAndUpdate(id, newObj, {new:true});
	}

	
}

module.exports = UserService;
