'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;
	router.get('/', controller.home.hello);

	/* 用户 */
	//用户登录
	router.post('/login', controller.user.login);
	//更新用户信息
	router.post('/updateUser', controller.user.updateUser);

	/* 分类 */
	router.get('/getCategory', controller.category.getCategory);
	
	//上传文件
	router.post('/uploadFile', controller.file.uploadFile);
	
	/* 文章 */
	//添加
	router.post('/addArticle', controller.article.add);
	//查找所有文章
	router.get('/findAllArticles', controller.article.findAll);
	//通过用户id查找文章
	router.get('/findArticlesByUserId', controller.article.findByUserId);
	//通过文章id查找文章
	router.get('/findByArticleId', controller.article.findByArticleId);
	
	/* 关注 */
	//添加关注
	router.post('/follow', controller.follow.follow);
	//是否已关注该用户
	router.post('/isFollow', controller.follow.isFollow);
	//取消关注
	router.post('/cancelFollow', controller.follow.cancelFollow);
	//查询我的关注
	router.get('/findMyFollow', controller.follow.findMyFollow);
	
	//点赞
	router.post('/like', controller.like.like);
	
	
	/* 评论 */
	// 添加评论
	router.post('/addComment', controller.comment.addComment);
	//获取评论
	router.get('/findComment', controller.comment.findComment);
	
	
};
