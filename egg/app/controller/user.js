'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async list() {
		var res = await this.ctx.service.user.getUser();
		console.log(res);
		this.ctx.body = 'hi hello';
  }

}

module.exports = UserController;
