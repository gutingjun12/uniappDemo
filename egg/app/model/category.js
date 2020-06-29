module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
	
  const CategorySchema = new Schema({
    categoryId: { type: Number },  //分类id
    categoryName: { type: String } //分类名称
  },{versionKey:false});
  return mongoose.model('Category', CategorySchema, 'categories');
};