'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {

	//向数据库添加文章
	async addArticle(obj) {
		const {
			ctx
		} = this;
		var data = new ctx.model.Article(obj);
		return await data.save();

	}

	//查询文章
	async findArticle() {
		const {
			ctx
		} = this;


	}


}

module.exports = ArticleService;
