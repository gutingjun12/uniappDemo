<template>
	<view class="personal">

		<!-- 顶部 -->
		<view class="top">
			<view class="item"></view>
			<view class="item">
				<view class="user-name">哈哈哈哈</view>
				<view class="code">小红书号：123456</view>
			</view>
			<view class="item"></view>
		</view>

		<!-- 个人信息 -->
		<view class="info">
			<!-- 头像 -->
			<view class="avatar">
				<img src="../../static/logo.png" alt="">
			</view>
			<view class="r">
				<view class="r-top">
					<view class="item">
						<view class="num">100</view>
						<view class="text">关注</view>
					</view>
					<view class="item">
						<view class="num">100</view>
						<view class="text">粉丝</view>
					</view>
					<view class="item">
						<view class="num">100</view>
						<view class="text">获赞与收藏</view>
					</view>
				</view>
				<!-- 编辑 -->
				<button class="r-edit">编辑资料</button>
			</view>
		</view>

		<!-- 其他信息 -->
		<view class="other-info">
			<text class="item female">女</text>
			<text class="item">广东广州</text>
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
				<view class="item">
					<!-- 图片或视频 -->
					<view class="img-box">
						<img src="../../static/logo.png" alt="">
					</view>
					<!-- 内容 -->
					<view class="content">哈哈哈哈哈哈哈哈哈哈哈哈哈</view>
					<!-- 用户信息 -->
					<view class="user-info">
						<view class="l">
							<view class="avatar">
								<img src="../../static/logo.png" alt="" />
							</view>
							<view class="user-name">用户哈哈哈哈哈哈哈哈哈哈哈哈哈</view>
						</view>
						<view class="r">❤400</view>
					</view>
				</view>
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

			}
		},
		methods: {

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
				border-radius: $uni-border-radius-circle;
				overflow: hidden;
				margin-right: 20rpx;

				img {
					max-width: 100%;
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

					.content {
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
