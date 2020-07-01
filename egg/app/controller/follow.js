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
			followedUser: ctx.request.body.followedUserId
		}
		
		let result = await ctx.service.follow.addFollow(newFollow);
		ctx.body = {'data': result};
		
	}
	
	//是否关注某个人
	async isFollow() {
		const {
			ctx
		} = this;
	
		let obj = {
			userId: ctx.request.body.userId,
			followedUser: ctx.request.body.followedUserId
		}
		
		let result = await ctx.service.follow.findFollow(obj);
		ctx.body = {'data': result};
		
	}
	
	//取消关注
	async cancelFollow() {
		const {
			ctx
		} = this;
	
		let newFollow = {
			userId: ctx.request.body.userId,
			followedUser: ctx.request.body.followedUserId
		}
		
		let result = await ctx.service.follow.cancelFollow(newFollow);
		ctx.body = {'data': result};
		
	}
	
	//查询我的关注
	async findMyFollow() {
		const {
			ctx
		} = this;
	
		let obj = {
			userId: ctx.query.userId
		}
		
		let result = await ctx.service.follow.findFollow(obj);
		ctx.body = {'data': result};
		
	}
	

}

module.exports = FollowController;
