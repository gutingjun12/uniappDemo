<template>
	<view class="home">
		<!-- 顶部 -->
		<view class="top">
			<!-- 顶部切换 -->
			<view class="top-tab">
				<view class="item">关注</view>
				<view class="item active">发现</view>
			</view>
			<!-- 搜索 -->
			<view class="top-search">
				<view class="input">
					<icon type="search" size="14" color="#808080" />多芬洗发水</view>
			</view>
		</view>

		<!-- 主体部分 -->
		<view class="main">
			<!-- 筛选 -->
			<view class="filter">
				<view class="item">美食</view>
				<view class="item">家居家装</view>
				<view class="item">彩妆</view>
				<view class="item">母婴</view>
				<view class="item">运动健康</view>
				<view class="item">情感</view>
				<view class="item">时尚</view>
				<view class="item">游戏电竞</view>
				<view class="item">萌宠</view>
				<view class="item">发型</view>
			</view>
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
				<view class="item">
					<!-- 图片或视频 -->
					<view class="img-box">
						<img src="../../static/logo.png" alt="">
					</view>
					<!-- 内容 -->
					<view class="content">哈哈哈哈哈哈</view>
					<!-- 用户信息 -->
					<view class="user-info">
						<view class="l">
							<view class="avatar">
								<img src="../../static/logo.png" alt="" />
							</view>
							<view class="user-name">用户哈哈哈</view>
						</view>
						<view class="r">❤400</view>
					</view>
				</view>
				<view class="item">
					<!-- 图片或视频 -->
					<view class="img-box">
						<img src="../../static/logo.png" alt="">
					</view>
					<!-- 内容 -->
					<view class="content">哈哈哈哈哈哈哈哈哈哈或哈哈哈哈哈</view>
					<!-- 用户信息 -->
					<view class="user-info">
						<view class="l">
							<view class="avatar">
								<img src="../../static/logo.png" alt="" />
							</view>
							<view class="user-name">用户哈哈哈</view>
						</view>
						<view class="r">❤400</view>
					</view>
				</view>
				<view class="item">
					<!-- 图片或视频 -->
					<view class="img-box">
						<img src="../../static/logo.png" alt="">
					</view>
					<!-- 内容 -->
					<view class="content">哈哈哈哈哈哈</view>
					<!-- 用户信息 -->
					<view class="user-info">
						<view class="l">
							<view class="avatar">
								<img src="../../static/logo.png" alt="" />
							</view>
							<view class="user-name">用户哈哈哈</view>
						</view>
						<view class="r">❤400</view>
					</view>
				</view>
				<view class="item">
					<!-- 图片或视频 -->
					<view class="img-box">
						<img src="../../static/logo.png" alt="">
					</view>
					<!-- 内容 -->
					<view class="content">哈哈哈哈哈哈</view>
					<!-- 用户信息 -->
					<view class="user-info">
						<view class="l">
							<view class="avatar">
								<img src="../../static/logo.png" alt="" />
							</view>
							<view class="user-name">用户哈哈哈</view>
						</view>
						<view class="r">❤400</view>
					</view>
				</view>
				<view class="item">
					<!-- 图片或视频 -->
					<view class="img-box">
						<img src="../../static/logo.png" alt="">
					</view>
					<!-- 内容 -->
					<view class="content">哈哈哈哈哈哈</view>
					<!-- 用户信息 -->
					<view class="user-info">
						<view class="l">
							<view class="avatar">
								<img src="../../static/logo.png" alt="" />
							</view>
							<view class="user-name">用户哈哈哈</view>
						</view>
						<view class="r">❤400</view>
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

			}
		},
		onLoad() {

		},
		methods: {

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

					uni-icon {
						vertical-align: middle;
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
					background: $uni-bg-color;
					border: 2rpx solid $uni-border-color;
					padding: 10rpx;
					border-radius: $uni-border-radius-sm;

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
