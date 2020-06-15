'use strict';

const Controller = require('egg').Controller;

class CategoryController extends Controller {
	async getCategory() {
		const { ctx } = this;
		var res = await ctx.service.category.getCategory();
		ctx.body = {data:res};
	}

}

module.exports = CategoryController;
