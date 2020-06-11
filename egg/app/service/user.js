'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getUser() {
		return await this.ctx.model.User.find({});

  }


}

module.exports = UserService;