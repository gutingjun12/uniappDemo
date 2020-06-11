<template>
	<view class="search-list">
		<!-- 顶部导航 -->
		<view class="nav-bar">
			<!-- 左边 -->
			<view class="item l" @click="back">
				<!-- 返回按钮 -->
				<view class="back-btn">&lt;</view>
			</view>
			<!-- 中间 -->
			<view class="item m">
				<icon type="search" size="14" />
				<input type="text" placeholder="牙膏" confirm-type="search" />
			</view>
			<!-- 右边 -->
			<view class="item r">搜索</view>
		</view>
		<!-- 历史记录 -->
		<view class="history">
			<view class="title">历史记录</view>
			<view class="history-box">
				<button type="default" plain="true">牙膏</button>
				<button type="default" plain="true">国货眼霜</button>
				<button type="default" plain="true">防晒</button>
				<button type="default" plain="true">敏感肌</button>
				<button type="default" plain="true">夏季穿搭</button>
			</view>
		</view>
		<!-- 列表 -->
		<view class="list">
			<view class="item">牙膏</view>
			<view class="item">牙膏</view>
			<view class="item">牙膏</view>
			<view class="item">牙膏</view>
			<view class="item">牙膏</view>
			<view class="item">牙膏</view>
			<view class="item">牙膏</view>
			<view class="item">牙膏</view>
			<view class="item">牙膏</view>
			<view class="item">牙膏</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			back() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search-list {
		.nav-bar {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;
			width: 100%;
			display: flex;
			align-items: center;
			background: #FFFFFF;
			padding: 0 20rpx;
			height: 100rpx;
			border-bottom: 2rpx solid $uni-border-color;

			.item {

				&.l {
					width: 8%;

					.back-btn {
						font-family: "宋体";
						font-size: 40rpx;
						font-weight: 700;
						color: $uni-text-color-grey;
					}
				}

				&.m {
					position: relative;
					width: 82%;
					
					icon {
						position: absolute;
						left: 14rpx;
						top: 14rpx;
					}

					input {
						display: block;
						width: 100%;
						border-radius: $uni-border-radius-lg;
						font-size: $uni-font-size-base;
						color: $uni-text-color-placeholder;
						background: $uni-bg-color-grey;
						padding: 30rpx 50rpx;
					}
				}

				&.r {
					width: 10%;
					text-align: right;
					color: $uni-text-color-grey;
				}

			}

		}

		.history {
			margin-top: 100rpx;
			background: #fff;
			padding: 30rpx;
			
			.title {
				font-size: $uni-font-size-lg;
				font-weight: 700;
			}
			.history-box {
				button {
					display: inline-block;
					font-size: $uni-font-size-base;
					margin: 30rpx 30rpx 0 0;
					border-color: $uni-border-color;
				}
			}
		}
		.list {
			margin-top: 100rpx;
			background: #fff;
			.item {
				padding: 30rpx;
			}
		}
	}
</style>
