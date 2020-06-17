'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {

	//添加
	async add() {
		const {
			ctx
		} = this;

		let newArticle = {
			userId: ctx.request.body.userId,
			title: ctx.request.body.title,
			imgArr: ctx.request.body.imgArr,
			content: ctx.request.body.content
		}
		
		let result = await ctx.service.article.addArticle(newArticle);
		ctx.body = {'data': result};
		
	}

	//查找
	async find() {
		const {
			ctx
		} = this;



	}

}

module.exports = ArticleController;
