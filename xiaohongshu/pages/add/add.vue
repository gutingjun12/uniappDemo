<template>
	<view class="add">
		<!-- 顶部 -->
		<view class="top">
			<view class="l"></view>
			<view class="r"><i class="iconfont iconinfo-circle"></i></view>
		</view>

		<!-- 图片区 -->
		<view class="img-area">
			<view class="img-item" v-if="imgArr.length>0" v-for="(item,index) in imgArr" :key="index">
				<img :src="item" alt="" />
			</view>
			<view class="img-item" @click="chooseImg" v-if="imgArr.length<4">
				<text class="plus">+</text>
			</view>
		</view>

		<!-- 内容区 -->
		<view class="content-area">
			<!-- 标题 -->
			<input class="uni-input" placeholder="填写标题会获得更多赞哦~(20字符以内)" placeholder-style="color:#999" maxlength="20"
			 v-model="title" />
			<!-- 正文 -->
			<textarea class="text" placeholder="添加正文" placeholder-style="color: #999;" maxlength="-1" v-model="content" />
			<!-- 发布按钮 -->
			<button @click="publish">发布笔记</button>
		</view>
		
		<!-- 底部导航 -->
		<tabBar></tabBar>
		
	</view>
	
</template>

<script>
	import tabBar from '../../components/tabBar/tabBar.vue'
	export default {
		comments: {
			tabBar
		},
		data() {
			return {
				userId: '', //用户id
				userName: '',//用户名称
				userAvatar: '',//用户头像
				imgArr: [],//图片
				title: '',//文章标题
				content: '',//文章内容
			}
		},
		onLoad() {
			const that = this
			uni.getStorage({
				key: 'userInfo',
				success: function (res) {
					that.userId = JSON.parse(res.data)._id
					that.userName = JSON.parse(res.data).name
					that.userAvatar = JSON.parse(res.data).avatar
				}
			});
			
			
		},
		methods: {
			// 选择照片
			chooseImg() {
				const that = this
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						uni.uploadFile({
							url : 'http://127.0.0.1:7001/uploadFile',
							filePath: res.tempFiles[0].path,
							name: 'file',
							success: function(uploadFileRes) {
								that.imgArr.push(JSON.parse(uploadFileRes.data).data)
							},
							fail: function() {
								console.log('上传文件失败')
							}
						});
						
					},
					fail: function(res) {
						console.log('选择图片失败')
					}
				});
			},
			
			//发布笔记
			publish() {
				const that = this
				uni.request({
					method: 'POST',
					url: 'http://127.0.0.1:7001/addArticle',
					data: {
						userId: that.userId,
						userName: that.userName,
						userAvatar: that.userAvatar,
						title: that.title,
						content: that.content,
						imgArr: that.imgArr
					},
					success: (res) => {
						console.log(res.data.data._id)
						uni.navigateTo({
							url: '../detail/detail?articleId=' + res.data.data._id
						})
						
					},
					fail: (res) => {
						uni.showToast({
							title: '服务异常，请稍后重试',
							icon: 'none'
						})
					}
				});
				
			}
			
			
		}
	}
</script>

<style lang="scss" scoped>
	.add {
		.top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 80rpx;
			padding:  0 20rpx;
		}
		.img-area {
			display: flex;
			padding: 20rpx;

			.img-item {
				display: inline-flex;
				justify-content: center;
				align-items: center;
				width: 160rpx;
				height: 160rpx;
				border: 2rpx dashed #ddd;
				margin-right: 20rpx;
				
				&:last-of-type {
					margin-right: 0;
				}
				
				.plus {
					font-size: 40rpx;
					color: $uni-text-color-grey;
				}

				img {
					max-width: 100%;
					max-height: 100%;
				}
			}
		}
		.content-area {
			padding: 20rpx;
			
			.uni-input {
				height: 80rpx;
				border-bottom: 2rpx solid $uni-border-color;
				font-size: $uni-font-size-lg;
				font-weight: 700;
			}
			
			.text {
				width: 100%;
				height: 50vh;
				padding: 30rpx 0;
			}
			
			button {
				background: $uni-color-theme;
				color: #fff;
			}
			
		}
	}
</style>
