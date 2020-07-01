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

	//查询文章
	async findArticle(obj) {
		const {
			ctx
		} = this;
		
		//根据userid 查找用户信息 populate('user')
		let res = await ctx.model.Article.find(obj).populate('user');
		let res1 = res.map(item => {
			return {
				'imgArr': item.imgArr,
				'liked': item.liked,
				'collected': item.collected,
				'commentNum': item.commentNum,
				'_id': item._id,
				'user': item.user,
				'title': item.title,
				'content': item.content,
				'createDate': ctx.helper.formatTime(item.createDate)
			}
		});
		return res1;

	}
	
	

}

module.exports = ArticleService;
