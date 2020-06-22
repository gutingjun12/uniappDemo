'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {

	//向数据库添加文章
	async addArticle(obj) {
		const {
			ctx
		} = this;
		let data = new ctx.model.Article(obj);
		return await data.save();

	}

	//查询所有文章
	async findArticle(obj) {
		const {
			ctx
		} = this;
		let res = await ctx.model.Article.find(obj);
		let res1 = res.map(item => {
			return {
				'imgArr': item.imgArr,
				'liked': item.liked,
				'collected': item.collected,
				'commentNum': item.commentNum,
				'_id': item._id,
				'userId': item.userId,
				'userName': item.userName,
				'userAvatar': item.userAvatar,
				'title': item.title,
				'content': item.content,
				'createDate': ctx.helper.formatTime(item.createDate)
			}
		});
		return res1;

	}
	
	//更改用户信息后更新文章里的用户信息
	async updateArticles(userId, obj) {
		const {
			ctx
		} = this;
		return await ctx.model.Article.updateMany({'userId': userId}, obj);
	
	}
	

}

module.exports = ArticleService;
