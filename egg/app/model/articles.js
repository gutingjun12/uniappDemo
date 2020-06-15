module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
	
  const ArticleSchema = new Schema({
    title: { type: String },
    imgArr: { type: Array },
		content: { type: String },
		createDate: { type: Date,default: Date.now },
		author: {type: String}
  },{versionKey:false});
  return mongoose.model('Article', ArticleSchema, 'articles');
};