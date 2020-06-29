'use strict';

const Service = require('egg').Service;

class LikeService extends Service {

	//点赞
	async like(obj) {
		const {
			ctx
		} = this;
		let data = new ctx.model.Like(obj);
		return await data.save();

	}
	
/* 	//查找是否已经关注
	async findFollow(obj) {
		const {
			ctx
		} = this;
		return await ctx.model.Follow.findOne(obj);
	
	}
	
	//取消关注
	async cancelFollow(obj) {
		const {
			ctx
		} = this;
		return await ctx.model.Follow.remove(obj);
	
	} */

	

}

module.exports = LikeService;
