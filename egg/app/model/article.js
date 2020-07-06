module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
	
  const ArticleSchema = new Schema({
		user: { type: String, ref: 'User' }, //作者信息，传id
    title: { type: String }, //文章标题
    imgArr: { type: Array }, //文章图片
		content: { type: String }, //文章内容
		createDate: { type: Date, default: Date.now }, //创建时间
		liked: {type: Number, default: 0}, //收到的点赞
		collected: {type: Number, default: 0}, //被收藏数
		commentNum: {type: Number, default: 0} //评论数
		
  },{versionKey:false});
  return mongoose.model('Article', ArticleSchema, 'articles');
};