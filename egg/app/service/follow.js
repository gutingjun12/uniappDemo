'use strict';

const Service = require('egg').Service;

class FollowService extends Service {

	//关注用户
	async follow(obj) {
		const {
			ctx
		} = this;
		let data = new ctx.model.Follow(obj);
		return await data.save();

	}
	
	//查找是否已经关注
	async findFollow(obj) {
		const {
			ctx
		} = this;
		return await ctx.model.Follow.findOne(obj);
	
	}

	

}

module.exports = FollowService;
