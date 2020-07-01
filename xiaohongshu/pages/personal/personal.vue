<template>
	<view class="personal">

		<!-- 顶部 -->
		<view class="top">
			<view class="item"></view>
			<view class="item">
				<view class="user-name">{{userInfo.name}}</view>
				<!-- <view class="code">小红书号：123456</view> -->
			</view>
			<view class="item"></view>
		</view>

		<!-- 个人信息 -->
		<view class="info">
			<!-- 头像 -->
			<view class="avatar">
				<img :src="userInfo.avatar" alt="">
			</view>
			<view class="r">
				<view class="r-top">
					<view class="item">
						<view class="num">{{userInfo.follow}}</view>
						<view class="text">关注</view>
					</view>
					<view class="item">
						<view class="num">{{userInfo.fans}}</view>
						<view class="text">粉丝</view>
					</view>
					<view class="item">
						<view class="num">{{userInfo.likedAndCollected}}</view>
						<view class="text">获赞与收藏</view>
					</view>
				</view>
				<!-- 编辑 -->
				<button class="r-edit" @click="showEdit=true">编辑资料</button>
			</view>
		</view>

		<!-- 其他信息 -->
		<view class="other-info">
			<text :class="userInfo.sex==0?'item male':'item female'">{{userInfo.sex==0?'男':'女'}}</text>
			<text class="item">{{userInfo.area}}</text>
		</view>

		<!-- 切换导航栏 -->
		<view class="tab">
			<view class="item active">笔记</view>
			<view class="item">收藏</view>
			<view class="item">赞过</view>
		</view>

		<!-- 主体 -->
		<view class="main">
			<!-- 列表 -->
			<view class="list">
				<view class="item" v-for="(item, index) in articleArr" :key="index" @click="goDetail(item._id)">
					<!-- 图片或视频 -->
					<view class="img-box" v-if="item.imgArr.length>0">
						<img :src="item.imgArr[0]" alt="">
					</view>
					<!-- 内容标题 -->
					<view class="title">{{item.title}}</view>
					<!-- 用户信息 -->
					<view class="user-info">
						<view class="l">
							<view class="avatar">
								<img :src="item.userAvatar" alt="" />
							</view>
							<view class="user-name">{{item.userName}}</view>
						</view>
						<view class="r"><i class="iconfont iconheart"></i>{{item.liked}}</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 遮罩层 -->
		<view class="mask" v-if="showEdit" @click="showEdit=false"></view>

		<!-- 编辑资料 -->
		<view class="edit-info-area" v-if="showEdit">
			<view class="form-item">
				<view class="avatar" @click="chooseImg">
					<img :src="userAvatar" alt="">
				</view>
			</view>
			<view class="form-item">
				<view class="form-title">用户名：</view>
				<input class="uni-input" type="text" placeholder="用户名" v-model="userName" />
			</view>
			<view class="form-item">
				<view class="form-title">性别：</view>
				<radio-group @change="sexChange">
					<label>
						<radio value="0" :checked="userSex==0" />男
					</label>
					<label>
						<radio value="1" :checked="userSex==1" />女
					</label>
				</radio-group>
			</view>
			<view class="form-item">
				<view class="form-title">地区：</view>
				<input class="uni-input" type="text" placeholder="所在地(如: 广东广州)" v-model="userArea">
			</view>
			<view class="form-item">
				<button @click="submit">提交</button>
			</view>

		</view>


		<!-- 底部导航 -->
		<tabBar :active="4"></tabBar>

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
				userInfo: {}, //用户信息
				articleArr: [], //我的笔记
				userAvatar: '', //编辑中的头像
				userName: '', //编辑中用户名
				userSex: 0, //编辑中的性别
				userArea: '', //编辑中的地区
				showEdit: false, //编辑资料弹框
			}
		},
		onLoad() {
			const that = this
			uni.getStorage({
				key: 'userInfo',
				success: function(res) {
					that.userInfo = JSON.parse(res.data)
					that.userAvatar = that.userInfo.avatar
					that.userName = that.userInfo.name
					that.userSex = that.userInfo.sex
					that.userArea = that.userInfo.area
				}
			});

			that.getMyArticles()

		},
		methods: {
			//获取个人笔记
			getMyArticles() {
				const that = this
				uni.request({
					method: 'GET',
					url: '/api/findArticlesByUserId',
					data: {
						userId: that.userInfo._id
					},
					success: (res) => {
						that.articleArr = res.data.data
					},
					fail: (res) => {
						uni.showToast({
							title: '服务异常，请稍后重试',
							icon: 'none'
						})
					}
				});

			},

			// 选择照片
			chooseImg() {
				const that = this
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						uni.uploadFile({
							url: '/api/uploadFile',
							filePath: res.tempFiles[0].path,
							name: 'file',
							success: function(uploadFileRes) {
								that.userAvatar = JSON.parse(uploadFileRes.data).data
							},
							fail: function() {
								uni.showToast({
									title: '上传文件失败，请稍后重试',
									icon: 'none'
								})
							}
						});

					},
					fail: function(res) {
						uni.showToast({
							title: '选择图片失败，请稍后重试',
							icon: 'none'
						})
					}
				});
			},

			//选择性别
			sexChange(e) {
				const that = this
				that.userSex = e.detail.value
			},

			//提交用户信息编辑
			submit() {
				const that = this
				uni.request({
					method: 'POST',
					url: '/api/updateUser',
					data: {
						userId: that.userInfo._id,
						userName: that.userName,
						avatar: that.userAvatar,
						sex: that.userSex,
						area: that.userArea
					},
					success: (res) => {
						uni.showToast({
							title: '修改成功',
							icon: 'success'
						})
						uni.setStorage({
							key: 'userInfo',
							data: JSON.stringify(res.data.data),
							success: function() {
								that.showEdit = false
								that.userInfo = res.data.data
								that.getMyArticles()
							}
						});

					},
					fail: (res) => {
						uni.showToast({
							title: '服务异常，请稍后重试',
							icon: 'none'
						})
					}
				});


			},


			//跳转到笔记详情
			goDetail(articleId) {
				uni.navigateTo({
					url: '../detail/detail?articleId=' + articleId
				})
			}

		}
	}
</script>

<style lang="scss" scoped>
	.personal {
		.top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 120rpx;
			background: #fff;
			border-bottom: 2rpx solid $uni-border-color;

			.item {
				text-align: center;

				.user-name {
					font-size: $uni-font-size-lg;
					font-weight: 700;
					line-height: 50rpx;
				}

				.code {
					font-size: $uni-font-size-sm;
					color: $uni-text-color-grey;
				}
			}
		}

		.info {
			display: flex;
			align-items: center;
			height: 220rpx;
			background: #fff;
			padding: 20rpx;

			.avatar {
				width: 140rpx;
				height: 140rpx;
				border: 2rpx solid $uni-border-color;
				border-radius: $uni-border-radius-circle;
				overflow: hidden;
				margin-right: 20rpx;

				img {
					width: 100%;
					height: 100%;
					object-fit:cover;
				}
			}

			.r {
				flex: 1;

				.r-top {
					margin-bottom: 20rpx;

					.item {
						display: inline-block;
						width: 33%;
						text-align: center;

						.num {
							font-size: $uni-font-size-lg;
							font-weight: 700;
						}

						.text {
							font-size: $uni-font-size-sm;
							color: $uni-text-color-second;
						}
					}
				}

				.r-edit {
					font-size: $uni-font-size-base;
					background: #fff;
				}
			}
		}

		.other-info {
			padding: 0 30rpx 20rpx;
			background: #fff;
			border-bottom: 2rpx solid $uni-border-color;
			font-size: $uni-font-size-sm;

			.item {
				margin-right: 20rpx;

				&.male {
					color: #1e90ff;
				}

				&.female {
					color: #ff69b4;
				}
			}
		}

		.tab {
			display: flex;
			justify-content: center;
			background: #fff;
			font-size: $uni-font-size-lg;
			border-bottom: 2rpx solid $uni-border-color;

			.item {
				height: 100rpx;
				line-height: 100rpx;
				margin-right: 40rpx;

				&:last-of-type {
					margin-right: 0;
				}

				&.active {
					border-bottom: 4rpx solid $uni-color-theme;
					font-weight: 700;
				}

			}
		}

		.main {
			padding: 20rpx 10rpx;

			.list {
				column-count: 2;
				column-gap: 10rpx;

				.item {
					break-inside: avoid;
					width: 360rpx;
					background: $uni-bg-color;
					border-radius: $uni-border-radius-sm;
					overflow: hidden;
					margin-bottom: 16rpx;

					.img-box {
						width: 100%;

						img {
							width: 100%;
						}
					}

					.title {
						font-size: $uni-font-size-lg;
						font-weight: 700;
						margin: 12rpx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
					}

					.user-info {
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 12rpx;
						font-size: $uni-font-size-sm;
						color: $uni-text-color-second;

						.l {
							display: inline-flex;
							align-items: center;

							.avatar {
								width: 50rpx;
								height: 50rpx;
								border: 2rpx solid $uni-border-color;
								border-radius: $uni-border-radius-circle;
								overflow: hidden;
								margin-right: 6rpx;

								img {
									width: 100%;
									height: 100%;
									object-fit:cover;
								}
							}

							.user-name {
								width: 160rpx;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}
						}

						.r {
							color: $uni-text-color-grey;
						}
					}
				}
			}
		}

		.mask {
			position: fixed;
			left: 0;
			top: 0;
			z-index: 999;
			width: 100%;
			min-height: 100vh;
			background: $uni-bg-color-mask;
		}

		.edit-info-area {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;
			width: 100%;
			height: 70vh;
			background: #fff;



			.form-item {
				display: flex;
				align-items: center;
				margin: 50rpx 30rpx;

				&:first-of-type {
					justify-content: center;
					padding: 30rpx 0;

					.avatar {
						width: 160rpx;
						height: 160rpx;
						border-radius: $uni-border-radius-circle;
						border: 1rpx solid $uni-border-color;
						overflow: hidden;

						img {
							width: 100%;
							height: 100%;
							object-fit:cover;
						}
					}
				}

				.form-title {
					font-size: $uni-font-size-lg;
					width: 20%;
				}

				.uni-input {
					flex: 1;
					height: 80rpx;
					border: 2rpx solid $uni-border-color;
					padding: 0 20rpx;
				}

				label {
					margin-right: 30rpx;
				}

				button {
					width: 100%;
					color: #fff;
					background: $uni-color-theme;
				}

			}

		}

	}
</style>
