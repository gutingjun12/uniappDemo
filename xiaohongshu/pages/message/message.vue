<template>
	<view class="message">
		<!-- 顶部菜单 -->
		<view class="top">
			<view class="item">
				<img src="static/logo.png" alt="">
				<view class="text">赞和收藏</view>
			</view>
			<view class="item">
				<img src="static/logo.png" alt="">
				<view class="text">新增关注</view>
			</view>
			<view class="item">
				<img src="static/logo.png" alt="">
				<view class="text">评论和@我</view>
			</view>
		</view>

		<!-- 列表	 -->
		<view class="list">
			<view class="item">
				<!-- 头像 -->
				<view class="avatar">
					<img src="static/logo.png" alt="">
				</view>
				<!-- 内容区域 -->
				<view class="content">
					<!-- 名称 -->
					<view class="content-top">
						<view class="user-name">哈哈哈哈</view>
						<view class="time">2020-6-3</view>
					</view>
					<!-- 消息内容 -->
					<view class="text">内容内容内容哈哈哈哈哈哈哈哈哈哈或或或或或或或或红红火火恍恍惚惚</view>
				</view>
			</view>
		</view>

		<!-- 底部导航 -->
		<tabBar :active="3"></tabBar>

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
	.message {
		.top {
			display: flex;
			align-items: center;
			height: 260rpx;
			background: #fff;
			margin-bottom: 20rpx;

			.item {
				flex: 1;
				text-align: center;

				img {
					width: 80rpx;
					margin: 0 0 14rpx 0;
				}
			}
		}

		.list {
			background: #fff;

			.item {
				display: flex;
				padding: 30rpx 20rpx;
				border-bottom: 2rpx solid $uni-border-color;

				.avatar {
					width: 90rpx;
					height: 90rpx;
					border-radius: $uni-border-radius-circle;
					overflow: hidden;

					img {
						max-width: 100%;
					}
				}

				.content {
					width: 580rpx;
					margin: 0 20rpx;

					.content-top {
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-bottom: 12rpx;

						.user-name {
							font-size: $uni-font-size-lg;
							font-weight: 700;
						}

						.time {
							font-size: $uni-font-size-sm;
							color: $uni-text-color-grey;
						}
					}

					.text {
						width: 100%;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						color: $uni-text-color-grey;
					}
				}
			}
		}
	}
</style>
