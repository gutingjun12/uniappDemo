'use strict';

const Service = require('egg').Service;

class FollowService extends Service {

	//关注用户
	async addFollow(obj) {
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
		let res = await ctx.model.Follow.find(obj).populate(['follower', 'beFollowed']);
		let res1 = res.map(item => {
			return {
				'_id': item._id,
				'follower': item.follower,
				'beFollowed': item.beFollowed,
				'createDate': ctx.helper.formatTime(item.createDate)
			}
		});
		return res1;
	
	}
	
	//取消关注
	async cancelFollow(obj) {
		const {
			ctx
		} = this;
		return await ctx.model.Follow.remove(obj);
	
	}

	

}

module.exports = FollowService;
