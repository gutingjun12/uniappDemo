'use strict';

const Service = require('egg').Service;

class CategoryService extends Service {
	async getCategory() {
		const { ctx } = this;
		return await ctx.model.Category.find({});
	}


}

	module.exports = CategoryService;
