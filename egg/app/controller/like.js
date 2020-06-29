'use strict';

const Controller = require('egg').Controller;

class LikeController extends Controller {
	//点赞
	async like() {
		const {
			ctx
		} = this;
	
		let newLike = {
			userId: ctx.request.body.userId,
			articleId: ctx.request.body.articleId
		}
					
		let result = await ctx.service.like.like(newLike);
		
		ctx.body = {'data': result};
		
	}
	
/* 	//是否关注
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
	
	//取消关注
	async cancelFollow() {
		const {
			ctx
		} = this;
	
		let newFollow = {
			userId: ctx.request.body.userId,
			followedUserId: ctx.request.body.followedUserId
		}
		
		let result = await ctx.service.follow.cancelFollow(newFollow);
		ctx.body = {'data': result};
		
	} */
	

}

module.exports = LikeController;
