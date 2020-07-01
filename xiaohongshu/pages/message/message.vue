<template>
	<view class="message">
		<!-- 顶部菜单 -->
		<view class="top">
			<view class="item" @click="goPage(0)">
				<img src="../../static/logo.png" alt="">
				<view class="text">赞和收藏</view>
				<text class="badge">12</text>
			</view>
			<view class="item" @click="goPage(1)">
				<img src="../../static/logo.png" alt="">
				<view class="text">新增关注</view>
				<text class="badge">2</text>
			</view>
			<view class="item" @click="goPage(2)">
				<img src="../../static/logo.png" alt="">
				<view class="text">评论和@我</view>
				<text class="badge">3</text>
			</view>
		</view>

		<!-- 列表	 -->
		<view class="list">
			<view class="item">
				<!-- 头像 -->
				<view class="avatar">
					<img src="../../static/logo.png" alt="">
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
			//跳转页面
			goPage(index) {
				let url = ''
				switch (index) {
					case 0:
						url = '../likeList/likeList'
						break;
					case 1:
						url = '../followList/followList?flag=1'
						break;
					case 2:
						url = '../commentList/commentList'
						break;	
				}
				uni.navigateTo({
					url: url
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.message {
		.top {
			display: flex;
			justify-content: space-around;
			align-items: center;
			height: 260rpx;
			background: #fff;
			margin-bottom: 20rpx;

			.item {
				position: relative;
				width: 144rpx;
				text-align: center;

				img {
					width: 80rpx;
					margin: 0 0 14rpx 0;
				}

				.badge {
					position: absolute;
					top: -20rpx;
					right: 8rpx;
					min-width: 36rpx;
					border-radius: $uni-border-radius-lg;
					font-size: $uni-font-size-sm;
					background: $uni-color-theme;
					color: #fff;
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
					position: relative;
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
