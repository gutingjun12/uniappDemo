'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
	async hello() {
	  this.ctx.body = 'hello';
	
	}

}

module.exports = HomeController;
