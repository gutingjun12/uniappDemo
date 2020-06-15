'use strict';

const Service = require('egg').Service;

class UserService extends Service {
	async getUser() {
		const { ctx } = this;
		return await ctx.model.User.find({});
	}

	// async addUser(obj) {
	// 	const { ctx } = this;
	// 	var data = new ctx.model.User(obj);
	// 	data.save();
	// }

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
