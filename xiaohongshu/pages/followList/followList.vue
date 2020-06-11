<template>
	<view class="follow-list">
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
					<view class="operate">开始关注你了<text class="time">2020-6-3</text></view>
				</view>
				<!-- 右边 -->
				<view class="r">
					<button type="warn" size="mini" plain="true">回粉</button>
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
						<view class="user-name">哈哈哈哈</view>
					</view>
					<!-- 操作 -->
					<view class="operate">开始关注你了<text class="time">2020-6-3</text></view>
				</view>
				<!-- 右边 -->
				<view class="r">
					<button type="default" size="mini" plain="true">已关注</button>
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
				navTitle: '新增关注',
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
.follow-list {
	.list {
		padding: 88rpx 0 0 0;

		.item {
			display: flex;
			background: #FFFFFF;
			padding: 20rpx;
			border-bottom: 2rpx solid $uni-border-color;

			.l {
				flex: 2;

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
						font-size: $uni-font-size-lg;
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
			}

			.r {
				flex: 1;
				align-self: center;
				text-align: right;
				button {
					
				}
			}
		}
	}
}
</style>
