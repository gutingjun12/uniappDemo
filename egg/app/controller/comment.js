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
		ctx.body = {
			'data': result
		};

	}


	//通过文章id查找文章评论
	async findComment() {
		const {
			ctx
		} = this;

		let articleId = ctx.query.articleId;
		let res = await ctx.service.comment.findComment({
			'articleId': articleId
		});
		
		let arr1 = [];
		let arr2 = [];
		res.forEach(function(item) {
			if(item.parentId == '0') {
				arr1.push(item);
			}else {
				arr2.push(item);
			}
		});
		
		var child = [];
		arr2.forEach(function(item2) {
			arr1.forEach(function(item1) {
				if(item2.parentId == item1._id) {
					child.push(item2);
					item1.child = child;
				}
			});
			
			child = [];
			
		});
		
		
		
		ctx.body = {
			'data': arr1
		};

	}



}

module.exports = CommentController;
