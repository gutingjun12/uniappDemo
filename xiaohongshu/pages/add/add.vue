<template>
	<view class="add">
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			uni.chooseImage({
			    count: 6, //默认9
			    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			    sourceType: ['album'], //从相册选择
			    success: function (res) {
			        console.log(JSON.stringify(res.tempFilePaths));
			    }
			});
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.add {
	
}
</style>
