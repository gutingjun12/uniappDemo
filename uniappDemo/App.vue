<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	body {
		background: $uni-bg-color-grey;
		color: $uni-text-color;
		font-family: sans-serif;
		font-size: $uni-font-size-base;
	}
	* {
		box-sizing: border-box;
	}
</style>
