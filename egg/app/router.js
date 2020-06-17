'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;
	router.get('/', controller.home.hello);
	/* 测试 */
	// router.get('/getList', controller.user.list);
	// router.get('/addUser', controller.user.add);
	// router.get('/removeUser', controller.user.remove);
	// router.get('/updateUser', controller.user.update);
	/* 测试 */
	
	//用戶
	// router.get('/getUsers', controller.user.getUsers);
	
	/* 用户 */
	//用户登录
	router.post('/login', controller.user.login);
	// 新增用户
	router.post('/addUser', controller.user.addUser);

	// 分类
	router.get('/getCategory', controller.category.getCategory);
	
	//上传文件
	router.post('/uploadFile', controller.file.uploadFile);
	
	/* 文章 */
	//添加
	router.post('/addArticle', controller.article.add);
	
};
