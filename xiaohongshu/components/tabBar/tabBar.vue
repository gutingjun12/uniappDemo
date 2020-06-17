<template>
	<view class="tabBar">
		<view :class="active==0?'active item':'item'" @click="goPage(0)">首页
			<!-- <text class="red-dot">●</text> -->
		</view>
		<view :class="active==1?'active item':'item'" @click="goPage(1)">商城
			<!-- <text class="red-dot">●</text> -->
		</view>
		<view class="item" @click="goPage(2)">
			<img src="../../static/add.png" alt="">
		</view>
		<view :class="active==3?'active item':'item'" @click="goPage(3)">消息
			<!-- <text class="red-dot">●</text> -->
		</view>
		<view :class="active==4?'active item':'item'" @click="goPage(4)">我的
			<!-- <text class="red-dot">●</text> -->
		</view>
	</view>
</template>

<script>
	export default {
		props: ['active'],
		data() {
			return {

			};
		},
		methods: {
			//页面跳转
			goPage(index) {
				let path = ''
				switch (index) {
					case 0:
						path = '../../pages/home/home'
						break;
					case 1:
						path = '../../pages/shop/shop'
						break;
					case 2:
						path = uni.getStorageSync('userInfo') ? '../../pages/add/add' : '../../pages/login/login'
						break;
					case 3:
						path = uni.getStorageSync('userInfo') ? '../../pages/message/message' : '../../pages/login/login'
						break;
					case 4:
						path = uni.getStorageSync('userInfo') ? '../../pages/personal/personal' : '../../pages/login/login'
						break;
				}
				uni.reLaunch({
					url: path
				});
			}
		}

	}
</script>

<style lang="scss" scoped>
	.tabBar {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		background: #fff;
		border-top: 2rpx solid $uni-border-color;
		display: flex;

		.item {
			flex: 1;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			position: relative;
			height: 100rpx;

			img {
				width: 64rpx;
			}

			&.active {
				font-weight: 700;
			}

			.red-dot {
				position: absolute;
				top: 10rpx;
				right: 20rpx;
				font-size: $uni-font-size-lg;
				color: #f00;
			}
		}
	}
</style>
