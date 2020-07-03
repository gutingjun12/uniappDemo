'use strict';

const Controller = require('egg').Controller;

class CommentController extends Controller {

	//添加评论
	async addComment() {
		const {
			ctx
		} = this;

		let newComment = {
			articleId: ctx.request.body.articleId,
			parentId: ctx.request.body.parentId,
			content: ctx.request.body.content,
			fromUser: ctx.request.body.fromUserId,
			toUser: ctx.request.body.toUserId
		}
		let result = await ctx.service.comment.addComment(newComment);
		ctx.body = {'data': result};
		
	}
	
	
	//通过文章id查找文章评论
	async findComment() {
		const {
			ctx
		} = this;
		
		let articleId = ctx.query.articleId;
		let res = await ctx.service.comment.findComment({'articleId': articleId});
		ctx.body = {'data': res};
	
	}
	
	

}

module.exports = CommentController;
