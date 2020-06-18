<template>
	<view class="home">
		<!-- 顶部 -->
		<view class="top">
			<!-- 顶部切换 -->
			<view class="top-tab">
				<view :class="tabActive==0?'item active':'item'" @click="changeTab(0)">关注</view>
				<view :class="tabActive==1?'item active':'item'" @click="changeTab(1)">发现</view>
			</view>
			<!-- 搜索 -->
			<view class="top-search">
				<view class="input" @click="goToSearch">
					<i class="iconfont iconsearch"></i>多芬洗发水</view>
			</view>
		</view>

		<!-- 主体部分 -->
		<view class="main">
			<!-- 筛选 -->
			<view class="filter">
				<button class="item" v-for="(item,index) in categoryArr" :key="index">{{item.categoryName}}</button>
			</view>
			<!-- 列表 -->
			<view class="list">
				<view class="item" v-for="(item,index) in articleArr" :key="index" @click="goToDetail(item._id)">
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

		<!-- 底部导航 -->
		<tabBar :active="0"></tabBar>

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
				tabActive: 1, //0--关注  1--发现
				categoryArr: [], //分类
				articleArr: [], //所有文章
			}
		},
		onLoad() {
			const that = this
			//分类
			that.getClass()
			//文章
			that.getArticles()
		},
		methods: {
			//切换tab
			changeTab(num) {
				const that = this
				that.tabActive = num
			},
			//获取分类
			getClass() {
				const that = this
				uni.request({
					method: 'GET',
					url: 'http://192.168.3.45:7001/getCategory',
					data: {},
					success: (res) => {
						that.categoryArr = res.data.data
					},
					fail: (res) => {
						console.log('服务异常，请稍后重试')
					}
				});
			},

			//获取所有文章
			getArticles() {
				const that = this
				uni.request({
					method: 'GET',
					url: 'http://192.168.3.45:7001/findAllArticles',
					data: {},
					success: (res) => {
						that.articleArr = res.data.data
					},
					fail: (res) => {
						console.log('服务异常，请稍后重试')
					}
				});

			},

			// 跳转到搜索页
			goToSearch() {
				uni.navigateTo({
					url: '../searchList/searchList'
				})
			},
			// 跳转到详情页
			goToDetail(articleId) {
				uni.navigateTo({
					url: '../detail/detail?articleId=' + articleId
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home {

		// 滚动条隐藏
		::-webkit-scrollbar {
			width: 0;
			height: 0;
		}

		.top {
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			z-index: 99;
			background: $uni-bg-color;
			border-bottom: 2rpx solid $uni-border-color;

			.top-tab {
				display: flex;
				justify-content: center;

				.item {
					position: relative;
					display: inline-flex;
					align-items: center;
					width: 100rpx;
					height: 80rpx;
					font-size: $uni-font-size-lg;
					text-align: center;
					margin-right: 30rpx;

					&:last-of-type {
						margin-right: 0;
					}

					&.active {
						font-weight: 700;

						&::after {
							position: absolute;
							left: 12rpx;
							bottom: 0;
							content: ' ';
							width: 40rpx;
							height: 6rpx;
							background: $uni-color-theme;
							color: $uni-color-theme;
						}
					}
				}
			}

			.top-search {
				display: flex;
				justify-content: center;
				padding: 20rpx 0;

				.input {
					width: 96%;
					height: 68rpx;
					line-height: 68rpx;
					text-align: center;
					color: $uni-text-color-placeholder;
					background: $uni-bg-color-grey;
					border-radius: $uni-border-radius-lg;

					i {
						margin-right: 12rpx;
					}
				}
			}
		}

		.main {
			padding: 212rpx 10rpx 160rpx;

			.filter {
				white-space: nowrap;
				overflow-x: auto;
				padding: 0 0 24rpx 0;

				.item {
					display: inline-block;
					margin-right: 20rpx;
					background: #fff;
					font-size: $uni-font-size-base;

					&:last-of-type {
						margin-right: 0;
					}
				}
			}

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
						display: inline-flex;
						justify-content: center;
						align-items: center;
						width: 100%;
						border: 2rpx solid $uni-border-color;

						img {
							max-width: 100%;
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

							.avatar {
								width: 38rpx;
								height: 38rpx;
								border-radius: $uni-border-radius-circle;
								overflow: hidden;
								margin-right: 6rpx;

								img {
									width: 100%;
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
	}
</style>
