<template>
	<view class="detail">
		<!-- 顶部 -->
		<view class="top">
			<!-- 顶部左边 -->
			<view class="l">
				<!-- 返回按钮 -->
				<view class="back-btn" @click="back">&lt;</view>
				<!-- 头像 -->
				<view class="avatar">
					<img src="/static/logo.png" alt="">
				</view>
				<!-- 用户名 -->
				<view class="user-name">哈哈</view>
			</view>
			<!-- 顶部右边 -->
			<view class="r">
				<!-- 关注按钮 -->
				<button type="warn" size="mini" plain="true" class="follow">关注</button>
			</view>
		</view>
		<!-- 主体内容 -->
		<view class="main">
			<!-- 轮播图 -->
			<view class="img-box">
				<swiper class="swiper" indicator-dots indicator-active-color="#666">
					<swiper-item class="swiper-item">
						<img src="/static/logo.png" alt="">
					</swiper-item>
					<swiper-item class="swiper-item">
						<img src="/static/logo.png" alt="">
					</swiper-item>
				</swiper>
			</view>
			<!-- 文字内容 -->
			<view class="text-box">
				<view class="title">标题</view>
				<view class="content">哈哈哈哈哈哈哈哈哈哈或,dddddddddddd,.。哈哈哈哈哈哈，哈哈哈哈哈。</view>
				<view class="time">昨天 23:00</view>
			</view>
		</view>
		<!-- 评论区 -->
		<view class="comment">
			<!-- 评论总数 -->
			<view class="total">共300条评论</view>
			<!-- 评论列表 -->
			<view class="comment-list">
				<view class="item">
					<!-- 用户信息 -->
					<view class="user-info">
						<view class="avatar">
							<img src="/static/logo.png" alt="">
						</view>
						<view class="user-name">别人哈哈哈</view>
						<view class="like">❤20</view>
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
							<view class="like">❤20</view>
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
						<view class="like">❤20</view>
					</view>
					<!-- 内容 -->
					<view class="comment-text">up主好棒！<text class="time">昨晚 23:30</text></view>
				</view>
			</view>
		</view>

		<!-- 底部固定 -->
		<view class="fixed-part">
			<!-- 输入框 -->
			<textarea type="text" placeholder="说点什么。。。" />
			<!-- 点赞 -->
			<view class="item">♥100</view>
			<!-- 收藏 -->
			<view class="item">★23</view>
			<!-- 评论 -->
			<view class="item">◆666</view>
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
					font-family: "宋体";
					font-size: 40rpx;
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
				
				.swiper {
					height: 500rpx;

					.swiper-item {
						display: flex;
						justify-content: center;
						align-items: center;

						img {
							max-width: 100%;
							max-height: 100%;
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
					border-bottom: 2rpx solid #eee;

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
				border: 2rpx solid #eee;
				background: $uni-bg-color-grey;
			}
			.item {
				flex: 1;
				font-size: $uni-font-size-base;
				text-align: center;
			}
		}
	}
</style>
