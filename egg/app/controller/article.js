'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {

	//添加
	async add() {
		const {
			ctx
		} = this;

		let newArticle = {
			user: ctx.request.body.userId,
			title: ctx.request.body.title,
			imgArr: ctx.request.body.imgArr,
			content: ctx.request.body.content
		}
		
		// 添加文章
		let result = await ctx.service.article.addArticle(newArticle);
		
		ctx.body = {'data': result};
		
	}

	//查找所有文章
	async findAll() {
		const {
			ctx
		} = this;

		let res = await ctx.service.article.findArticle({});
		ctx.body = {'data': res};

	}
	
	//通过用户id查找文章列表
	async findByUserId() {
		const {
			ctx
		} = this;
		
		let userId = ctx.query.userId;
		let res = await ctx.service.article.findArticle({'user': userId});
		ctx.body = {'data': res};
	
	}
	
	//通过文章id查找文章详情
	async findByArticleId() {
		const {
			ctx
		} = this;
		
		let articleId = ctx.query.articleId;
		let res = await ctx.service.article.findArticle({'_id': articleId});
		ctx.body = {'data': res};
	
	}
	
	

}

module.exports = ArticleController;
