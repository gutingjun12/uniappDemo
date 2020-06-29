module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
	
  const LikeSchema = new Schema({
		userId: { type: String }, //操作者id
		articleId: { type: String }, //点赞的文章id
		createDate: { type: Date, default: Date.now } //操作时间
		
  },{versionKey:false});
  return mongoose.model('Like', LikeSchema, 'likes');
};