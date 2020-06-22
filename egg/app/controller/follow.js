'use strict';

const Controller = require('egg').Controller;

class FollowController extends Controller {
	//关注
	async follow() {
		const {
			ctx
		} = this;
	
		let newFollow = {
			userId: ctx.request.body.userId,
			followedUserId: ctx.request.body.followedUserId
		}
		
		let result = await ctx.service.follow.follow(newFollow);
		ctx.body = {'data': result};
		
	}
	
	//是否关注
	async isFollow() {
		const {
			ctx
		} = this;
	
		let obj = {
			userId: ctx.request.body.userId,
			followedUserId: ctx.request.body.followedUserId
		}
		
		let result = await ctx.service.follow.findFollow(obj);
		ctx.body = {'data': result};
		
	}

}

module.exports = FollowController;
