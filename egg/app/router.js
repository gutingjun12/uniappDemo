'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;
	router.get('/', controller.home.hello);
	router.get('/getList', controller.user.list);
	router.get('/addUser', controller.user.add);
	router.get('/removeUser', controller.user.remove);
	router.get('/updateUser', controller.user.update);
};
