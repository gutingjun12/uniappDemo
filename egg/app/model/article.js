module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
	
  const ArticleSchema = new Schema({
		userId: { type: String },
		userName: { type: String },
		userAvatar: { type: String },
    title: { type: String },
    imgArr: { type: Array },
		content: { type: String },
		createDate: { type: Date,default: Date.now },
		liked: {type: Number, default: 0},
		collected: {type: Number, default: 0},
		commentNum: {type: Number, default: 0}
		
  },{versionKey:false});
  return mongoose.model('Article', ArticleSchema, 'articles');
};