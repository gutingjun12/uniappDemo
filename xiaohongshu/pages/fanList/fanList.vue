<template>
	<view class="fan-list">
		<!-- 顶部导航 -->
		<navBar :navTitle="navTitle"></navBar>

		<!-- 列表 -->
		<view class="list">
			<view class="item" v-for="(item, index) in listArr" :key="index">
				<!-- 左边 -->
				<view class="l">
					<!-- 用户信息 -->
					<view class="user-info">
						<view class="avatar">
							<img :src="item.follower.avatar" alt="">
						</view>
						<view class="user-name">{{item.follower.name}}</view>
					</view>
					<!-- 操作 -->
					<view class="operate">开始关注你了<text class="time">{{item.createDate}}</text></view>
				</view>
				<!-- 右边 -->
				<view class="r">
					<button type="warn" size="mini" plain="true">回粉</button>
					<!-- <button type="default" size="mini" plain="true">互相关注</button> -->
				</view>
			</view>
		</view>
		
		<!-- 没数据时 -->
		<view class="no-data" v-if="listArr.length==0">
			<i class="iconfont iconzanwushuju1"></i>
			<view>暂无粉丝</view>
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
				navTitle: '我的粉丝',
				userId: '', // 我的id
				listArr: [], //粉丝列表
			}
		},
		onLoad(options) {
			const that = this
			
			uni.getStorage({
				key: 'userInfo',
				success: function(res) {
					that.userId = JSON.parse(res.data)._id
					that.getMyFans()
				}
			})
			
		},
		methods: {			
			//获取我的粉丝
			getMyFans() {
				const that = this
				uni.request({
					method: 'GET',
					url: '/api/findMyFans',
					data: {
						beFollowed: that.userId
					},
					success: (res) => {
						that.listArr = res.data.data
					},
					fail: (res) => {
						uni.showToast({
							title: '服务异常，请稍后重试',
							icon: 'none'
						})
					}
				});
				
			},
			
		}
	}
</script>

<style lang="scss" scoped>
.fan-list {
	.list {
		padding: 88rpx 0 0 0;

		.item {
			display: flex;
			background: #FFFFFF;
			padding: 20rpx;
			border-bottom: 2rpx solid $uni-border-color;

			.l {
				width: 68%;

				.user-info {
					display: flex;
					align-items: center;

					.avatar {
						width: 80rpx;
						height: 80rpx;
						border-radius: $uni-border-radius-circle;
						border: 2rpx solid $uni-border-color;
						overflow: hidden;
						margin-right: 20rpx;

						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}

					.user-name {
						width: 70%;
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
				width: 32%;
				align-self: center;
				text-align: right;
				button {
					
				}
			}
		}
	}
	.no-data {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 50vh;
		color: $uni-text-color-grey;
		
		.iconfont {
			font-size: 80rpx;
			color: #dbdbdb;
			margin-bottom: 20rpx;
		}
	}
}
</style>
