<template>
	<view class="popup">
		<!-- 底部弹出 -->
		<view class="bottom-popup">
			<view>回复</view>
			<view>回复</view>
			<view>回复</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.popup {
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .5);

		.bottom-popup {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 50vh;
			background: #fff;
		}
	}
</style>
