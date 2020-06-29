<template>
	<view class="detail">
		<!-- 顶部 -->
		<view class="top">
			<!-- 顶部左边 -->
			<view class="l">
				<!-- 返回按钮 -->
				<view class="back-btn" @click="back"><i class="iconfont iconleft"></i></view>
				<!-- 头像 -->
				<view class="avatar">
					<img :src="detail.userAvatar" alt="">
				</view>
				<!-- 用户名 -->
				<view class="user-name">{{detail.userName}}</view>
			</view>
			<!-- 顶部右边 -->
			<view class="r">
				<!-- 关注按钮 -->
				<button :type="followBtn=='关注'?'warn':'default'" size="mini" plain="true" class="follow" v-if="userId!=detail.userId"
				 @click="clickFollowBtn">{{followBtn}}</button>
			</view>
		</view>
		<!-- 主体内容 -->
		<view class="main">
			<!-- 轮播图 -->
			<view class="img-box" v-if="imgArr.length>0">
				<swiper class="swiper" indicator-dots indicator-active-color="#666">
					<swiper-item class="swiper-item" v-for="(item,index) in imgArr" :key="index">
						<img :src="item" alt="">
					</swiper-item>
				</swiper>
			</view>
			<!-- 文字内容 -->
			<view class="text-box">
				<view class="title">{{detail.title}}</view>
				<view class="content">{{detail.content}}</view>
				<view class="time">{{detail.createDate}}</view>
			</view>
		</view>
		<!-- 评论区 -->
		<view class="comment">
			<!-- 评论总数 -->
			<view class="total">共{{detail.commentNum}}条评论</view>
			<!-- 评论列表 -->
			<view class="comment-list">
				<view class="item">
					<!-- 用户信息 -->
					<view class="user-info">
						<view class="avatar">
							<img src="/static/logo.png" alt="">
						</view>
						<view class="user-name">别人哈哈哈</view>
						<view class="like"><i class="iconfont iconheart"></i>20</view>
					</view>
					<!-- 内容 -->
					<view class="comment-text">up主好棒！<text class="time">昨晚 23:30</text></view>
					<!-- 回复区 -->
					<view class="reply">
						<!-- 用户信息 -->
						<view class="user-info">
							<view class="avatar">
								<img src="/static/logo.png" alt="">
							</view>
							<view class="user-name">别人哈哈哈</view>
							<view class="like"><i class="iconfont iconheart"></i>20</view>
						</view>
						<!-- 内容 -->
						<view class="comment-text">up主好棒！<text class="time">昨晚 23:30</text></view>
					</view>
				</view>
				<view class="item">
					<!-- 用户信息 -->
					<view class="user-info">
						<view class="avatar">
							<img src="/static/logo.png" alt="">
						</view>
						<view class="user-name">别人哈哈哈</view>
						<view class="like"><i class="iconfont iconheart"></i>20</view>
					</view>
					<!-- 内容 -->
					<view class="comment-text">up主好棒！<text class="time">昨晚 23:30</text></view>
				</view>
			</view>
		</view>

		<!-- 底部固定 -->
		<view class="fixed-part">
			<!-- 输入框 -->
			<textarea placeholder="说点什么。。。" />
			<!-- 点赞 -->
			<view class="item"><i class="iconfont iconheart"></i>{{detail.liked}}</view>
			<!-- 收藏 -->
			<view class="item"><i class="iconfont iconstar"></i>{{detail.collected}}</view>
			<!-- 评论 -->
			<view class="item"><i class="iconfont iconmessage"></i>{{detail.commentNum}}</view>
		</view>
		
		<!-- 弹出的输入框 -->
		<view class="eject-textarea">
			<textarea placeholder="@某人" fixed="true" adjust-position="false" auto-height="true" />
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userId: '', // 自己的用户id
				articleId: '', //文章id
				detail: {}, //文章详情
				imgArr: [],//轮播图
				followBtn: '关注',
			}
		},
		onLoad(option) {
			const that = this
			// 文章id
			that.articleId = option.articleId
			//自己的userid
			uni.getStorage({
				key: 'userInfo',
				success(data) {
					that.userId = JSON.parse(data.data)._id
				}
			})
			// 笔记详情
			that.getDetail()
			
			
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			
			//获取笔记详情
			getDetail() {
				const that = this
				uni.request({
					method: 'GET',
					url: 'http://127.0.0.1:7001/findByArticleId',
					data: {
						articleId: that.articleId
					},
					success: (res) => {
						that.detail = res.data.data[0]
						that.imgArr = that.detail.imgArr
						
						// 是否已关注该作者
						that.isFollow()

					},
					fail: (res) => {
						uni.showToast({
							title: '服务异常，请稍后重试',
							icon: 'none'
						})
					}
				});
				
			},
			
			//点击关注按钮
			clickFollowBtn() {
				const that = this
				if(that.followBtn == '关注'){
					that.follow()
					
				}else if(that.followBtn == '已关注') {
					that.cancelFollow()
					
				}
				
			},
			
			//关注
			follow() {
				const that = this
				uni.request({
					method: 'POST',
					url: 'http://127.0.0.1:7001/follow',
					data: {
						userId: that.userId,
						followedUserId: that.detail.userId
					},
					success: (res) => {
						uni.showToast({
							title: '关注成功',
							icon: 'success'
						})
						
						that.followBtn = '已关注'
				
					},
					fail: (res) => {
						uni.showToast({
							title: '服务异常，请稍后重试',
							icon: 'none'
						})
					}
				});
				
			},
			
			//取消关注
			cancelFollow() {
				const that = this
				uni.request({
					method: 'POST',
					url: 'http://127.0.0.1:7001/cancelFollow',
					data: {
						userId: that.userId,
						followedUserId: that.detail.userId
					},
					success: (res) => {
						uni.showToast({
							title: '取消成功',
							icon: 'success'
						})
						
						that.followBtn = '关注'
				
					},
					fail: (res) => {
						uni.showToast({
							title: '服务异常，请稍后重试',
							icon: 'none'
						})
					}
				});
				
			},
			
			//是否已关注对方
			isFollow() {
				const that = this
				uni.request({
					method: 'POST',
					url: 'http://127.0.0.1:7001/isFollow',
					data: {
						userId: that.userId,
						followedUserId: that.detail.userId
					},
					success: (res) => {
						if(res.data.data){
							that.followBtn = '已关注'
						}else{
							that.followBtn = '关注'
						}
				
					},
					fail: (res) => {
						uni.showToast({
							title: '服务异常，请稍后重试',
							icon: 'none'
						})
					}
				});
				
			}
			
			
		}
	}
</script>

<style lang="scss" scoped>
	.detail {
		min-height: 100vh;
		background: #fff;

		.top {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;
			width: 100%;
			height: 100rpx;
			display: flex;
			justify-content: space-between;
			background: #FFFFFF;
			padding: 0 20rpx;
			border-bottom: 2rpx solid $uni-border-color;

			.l {
				display: inline-flex;
				align-items: center;

				.back-btn {
					font-weight: 700;
					color: $uni-text-color-grey;
				}

				.avatar {
					width: 64rpx;
					height: 64rpx;
					border-radius: $uni-border-radius-circle;
					border: 2rpx solid $uni-border-color;
					overflow: hidden;
					margin: 0 10rpx 0 30rpx;

					img {
						width: 100%;
						height: 100%;
						object-fit:cover;
					}
				}

				.user-name {
					width: 280rpx;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}

			.r {
				display: inline-flex;
				align-items: center;

				.follow {
					font-size: $uni-font-size-sm;
				}
			}
		}

		.main {
			margin-top: 100rpx;
			
			.img-box {
				border-bottom: 2rpx solid $uni-border-color;
				
				.swiper {
					height: 500rpx;

					.swiper-item {
						display: flex;
						justify-content: center;
						align-items: center;

						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}
				}
			}

			.text-box {
				padding: 20rpx;

				.title {
					font-size: $uni-font-size-lg;
					font-weight: 700;
					margin-bottom: 20rpx;
				}

				.content {
					line-height: 48rpx;
				}

				.time {
					font-size: $uni-font-size-sm;
					color: $uni-text-color-grey;
					margin-top: 20rpx;
				}
			}
		}

		.comment {
			margin: 20rpx 20rpx 120rpx;
			border-top: 2rpx solid $uni-border-color;

			.total {
				padding: 20rpx 0;
				color: $uni-text-color-second;
			}

			.comment-list {
				.item {
					padding: 30rpx 0;
					border-bottom: 2rpx solid $uni-border-color;

					.user-info {
						display: flex;
						align-items: center;

						.avatar {
							width: 50rpx;
							height: 50rpx;
							border-radius: $uni-border-radius-circle;
							overflow: hidden;
							margin-right: 10rpx;

							img {
								width: 100%;
							}
						}

						.user-name {
							color: $uni-text-color-grey;
						}

						.like {
							margin-left: auto;
							color: $uni-text-color-grey;
						}
					}

					.comment-text {
						padding: 10rpx 0 10rpx 50rpx;
						line-height: 48rpx;

						.time {
							font-size: $uni-font-size-sm;
							color: $uni-text-color-grey;
							margin-left: 20rpx;
						}
					}
					.reply {
						margin: 20rpx 0 0 50rpx;
						.avatar {
							width: 40rpx;
							height: 40rpx;
						}	
					}
				}
			}
		}
		.fixed-part {
			position: fixed;
			bottom: 0;
			left: 0;
			z-index: 999;
			width: 100%;
			display: flex;
			align-items: center;
			background: #fff;
			border-top: 2rpx solid $uni-border-color;
			padding: 20rpx;
			textarea {
				flex: 3;
				height: 60rpx;
				padding: 10rpx;
				border-radius: $uni-border-radius-lg;
				font-size: $uni-font-size-sm;
				border: 2rpx solid $uni-border-color;
				background: $uni-bg-color-grey;
			}
			.item {
				flex: 1;
				font-size: $uni-font-size-base;
				text-align: center;
			}
		}
		
		.eject-textarea {
			border: 1px solid black;
			
			textarea {
				width: 100%;
				border: 1px solid pink;
			}
		}
		
	}
</style>
