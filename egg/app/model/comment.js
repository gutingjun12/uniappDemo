module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
	
	
  const CommentSchema = new Schema({
		fromUser: { type: String, ref: 'User' }, //评论人
		toUser: { type: String, ref: 'User' }, //被评论的人
		articleId: { type: String }, //文章id
		parentId: { type: String, default: '0' },//0时为一级评论
    content: { type: String }, //评论内容
		child: { type: Array }, //子回复
		createDate: { type: Date, default: Date.now }//评论时间
		
  },{versionKey:false});
	
  return mongoose.model('Comment', CommentSchema, 'comments');
};