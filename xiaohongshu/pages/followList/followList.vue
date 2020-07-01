<template>
	<view class="follow-list">
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
							<img :src="item.followedUser.avatar" alt="">
						</view>
						<view class="user-name">{{item.followedUser.name}}</view>
					</view>
					<!-- 操作 -->
					<view class="operate" v-if="flag==1">开始关注你了<text class="time">2020-6-3</text></view>
					<!-- 用户笔记和粉丝数 -->
					<!-- <view class="operate">笔记：10 | 粉丝：4</view> -->
				</view>
				<!-- 右边 -->
				<view class="r">
					<!-- <button type="warn" size="mini" plain="true">回粉</button> -->
					<button type="default" size="mini" plain="true">已关注</button>
					<!-- <button type="default" size="mini" plain="true">互相关注</button> -->
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
				flag: 0, //0-我的关注  1-新增关注
				navTitle: '我的关注',
				userId: '', // 我的id
				listArr: [], //关注列表
			}
		},
		onLoad(options) {
			const that = this

			if(options.flag == 0){
				that.navTitle = '我的关注'
			}else if(options.flag == 1) {
				that.navTitle = '新增关注'
			}
			that.flag = options.flag
			
			uni.getStorage({
				key: 'userInfo',
				success: function(res) {
					that.userId = JSON.parse(res.data)._id
				}
			})
			
			that.getMyFollow()
			
		},
		methods: {
			//获取我的关注
			getMyFollow() {
				const that = this
				uni.request({
					method: 'GET',
					url: '/api/findMyFollow',
					data: {
						userId: that.userId
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
.follow-list {
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
						// overflow: hidden;
						// text-overflow: ellipsis;
						// white-space: nowrap;
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
}
</style>
