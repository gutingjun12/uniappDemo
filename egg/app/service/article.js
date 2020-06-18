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
	async findAllArticles() {
		const {
			ctx
		} = this;
		return await ctx.model.Article.find({});

	}
	
	//通过用户id查询文章
	async findByUserId(userId) {
		const {
			ctx
		} = this;
		return await ctx.model.Article.find({'userId': userId});
	
	}
	
	//通过笔记id查询
	async findByArticleId(articleId) {
		const {
			ctx
		} = this;
		return await ctx.model.Article.findById(articleId);
	
	}


}

module.exports = ArticleService;
