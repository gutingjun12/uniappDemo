'use strict';

const Service = require('egg').Service;

class CommentService extends Service {

	//添加评论
	async addComment(obj) {
		const {
			ctx
		} = this;
		let data = new ctx.model.Comment(obj);
		return await data.save();

	}
	
	//查询评论
	async findComment(obj) {
		const {
			ctx
		} = this;
		
		let res = await ctx.model.Comment.find(obj).populate('user');
		let res1 = res.map(item => {
			return {
				'articleId': item.articleId,
				'parentId': item.parentId,
				'content': item.content,
				'fromUser': item.fromUser,
				'toUser': item.toUser,
				'createDate': ctx.helper.formatTime(item.createDate)
			}
		});
		return res1;
	
	}
	
	

}

module.exports = CommentService;
