<template>
	<view class="like-list">
		<!-- 顶部导航 -->
		<navBar :navTitle="navTitle"></navBar>

		<!-- 列表 -->
		<view class="list">
			<view class="item">
				<!-- 左边 -->
				<view class="l">
					<!-- 用户信息 -->
					<view class="user-info">
						<view class="avatar">
							<img src="static/logo.png" alt="">
						</view>
						<view class="user-name">哈哈哈哈</view>
					</view>
					<!-- 操作 -->
					<view class="operate">赞了你的评论<text class="time">2020-6-3</text></view>
					<!-- 评论内容 -->
					<view class="comment">哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或</view>
				</view>
				<!-- 右边 -->
				<view class="r">
					<!-- 内容图片 -->
					<view class="img-box">
						<img src="static/logo.png" alt="">
					</view>
				</view>
			</view>
			<view class="item">
				<!-- 左边 -->
				<view class="l">
					<!-- 用户信息 -->
					<view class="user-info">
						<view class="avatar">
							<img src="static/logo.png" alt="">
						</view>
						<view class="user-name">哈哈哈哈哈哈哈红红火火恍恍惚惚哈哈哈</view>
					</view>
					<!-- 操作 -->
					<view class="operate">收藏了你的笔记<text class="time">2020-6-3</text></view>
				</view>
				<!-- 右边 -->
				<view class="r">
					<!-- 内容图片 -->
					<view class="img-box">
						<img src="static/logo.png" alt="">
					</view>
				</view>
			</view>
			<view class="item">
				<!-- 左边 -->
				<view class="l">
					<!-- 用户信息 -->
					<view class="user-info">
						<view class="avatar">
							<img src="static/logo.png" alt="">
						</view>
						<view class="user-name">哈哈哈哈哈哈哈红红火火恍恍惚惚哈哈哈</view>
					</view>
					<!-- 操作 -->
					<view class="operate">赞了你的笔记<text class="time">2020-6-3</text></view>
				</view>
				<!-- 右边 -->
				<view class="r">
					<!-- 内容图片 -->
					<view class="img-box">
						<img src="static/logo.png" alt="">
					</view>
				</view>
			</view>
			
		</view>

	</view>
</template>

<script>
	import navBar from '../../components/navBar/navBar.vue'
	export default {
		comments: {
			navBar
		},
		data() {
			return {
				navTitle: '赞和收藏',
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.like-list {
		.list {
			padding: 88rpx 0 0 0;

			.item {
				display: flex;
				background: #FFFFFF;
				padding: 20rpx;
				border-bottom: 2rpx solid $uni-border-color;

				.l {
					width: 85%;

					.user-info {
						display: inline-flex;
						align-items: center;

						.avatar {
							width: 70rpx;
							height: 70rpx;
							border-radius: $uni-border-radius-circle;
							border: 2rpx solid $uni-border-color;
							overflow: hidden;
							margin-right: 20rpx;

							img {
								max-width: 100%;
							}
						}

						.user-name {
							font-size: $uni-font-size-lg;
							width: 60%;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
					.operate {
						margin: 0 0 0 90rpx;
						color: $uni-text-color-second;
						.time {
							font-size: $uni-font-size-sm;
							margin-left: 30rpx;
						}
					}
					.comment {
						margin: 20rpx 0 0 90rpx;
						color: $uni-text-color-second;
						border-left: 8rpx solid #ddd;
						width: 80%;
						padding-left: 10rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}

				.r {
					width: 15%;
					.img-box {
						width: 100rpx;
						height: 100rpx;
						border: 2rpx solid $uni-border-color;
						overflow: hidden;

						img {
							max-width: 100%;
						}
					}
				}
			}
		}
	}
</style>
