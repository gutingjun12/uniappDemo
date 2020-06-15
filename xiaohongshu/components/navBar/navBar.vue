<template>
	<view class="nav-bar">
		<!-- 左边 -->
		<view class="item l" @click="back">
			<!-- 返回按钮 -->
			<view class="back-btn"><i class="iconfont iconleft"></i></view>
		</view>
		<!-- 中间 -->
		<view class="item m">
			<view class="title">{{navTitle}}</view>
		</view>
		<!-- 右边 -->
		<view class="item r"></view>

	</view>
</template>

<script>
	export default {
		props: ['navTitle'],
		data() {
			return {

			};
		},
		onload() {
		
		},
		methods:{
			back() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
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
		height: 88rpx;
		border-bottom: 2rpx solid $uni-border-color;

		.item {
			flex: 1;

			&.l {
				.back-btn {
					font-weight: 700;
					color: $uni-text-color-grey;
				}
			}

			&.m {
				text-align: center;
				font-size: $uni-font-size-lg;
				font-weight: 700;
			}


		}

	}
</style>
