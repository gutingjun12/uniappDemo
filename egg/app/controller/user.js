'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

	// 登录
	async login() {
		const {
			ctx
		} = this;

		// 用户登录手机号
		let phone = ctx.request.body.phone;
		let res = await ctx.service.user.findUser({'phone': phone});
		if (res.length==0) {
			let phone = ctx.request.body.phone;
			let newUser = {
				name: '小红薯' + phone,
				phone: phone
			}
			let result = await ctx.service.user.addUser(newUser);
			ctx.body = {
				'data': result
			};

		} else {
			ctx.body = {
				'data': res[0]
			};
		}

	}
	
	//通过id查找用户
	async findUserById() {
		const {
			ctx
		} = this;

		let res = await ctx.service.user.findUser({'_id': ctx.request.body.userId});
		ctx.body = {'data': res};
	}
	
	
	// 更新用户信息
	async updateUser() {
		const {
			ctx
		} = this;

		let id = ctx.request.body.userId;
		let newObj = {
			name: ctx.request.body.userName,
			avatar: ctx.request.body.avatar,
			sex: ctx.request.body.sex,
			area: ctx.request.body.area
		}
		
		let res = await ctx.service.user.updateUser(id, newObj);
		ctx.body = {'data': res};

	}


}

module.exports = UserController;
