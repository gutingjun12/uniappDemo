'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;
	router.get('/', controller.home.hello);
	router.get('/getList', controller.user.list);
	router.get('/cook', controller.cook.list);

};
