<template>
	<view class="login">
		<view class="login-box">
			<view class="title">手机号注册/登录</view>

			<!-- 手机号输入框 -->
			<view class="form-item" v-if="!codeShow">
				<input class="uni-input" type="text" maxlength="11" placeholder="请输入手机号" v-model="phone" @input="inputPhone">
				<button :class="codeBtnDisabled?'':'active'" :disabled="codeBtnDisabled" @click="sendCode">发送验证码</button>
			</view>

			<!-- 验证码输入框 -->
			<view class="form-item" v-if="codeShow">
				<input class="uni-input" type="text" maxlength="6" placeholder="请输入验证码" v-model="code" @input="inputCode">
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: '', //手机号
				code: '', //短信验证码
				codeBtnDisabled: true, // 发送验证码按钮禁用
				codeShow: false, //验证码输入框隐藏
			}
		},
		methods: {
			//输入手机号
			inputPhone(e) {
				const that = this
				if (e.detail.value.length == 11) {
					let res = /^1[3456789]\d{9}$/
					if (!res.test(e.detail.value)) {
						uni.showToast({
							title: '手机号码格式不正确',
							icon: 'none'
						});
						that.codeBtnDisabled = true
						return false;
					} else {
						that.codeBtnDisabled = false
					}
				} else {
					that.codeBtnDisabled = true
				}

			},

			//发送验证码
			sendCode() {
				const that = this
				that.codeShow = true
				uni.showToast({
					title: '验证码发送成功',
					icon: 'none'
				});
				setTimeout(function() {
					uni.showToast({
						title: '验证码为111111',
						icon: 'none'
					});
				}, 1000)
			},

			//输入验证码
			inputCode(e) {
				const that = this
				if (e.detail.value.length == 6) {
					if (e.detail.value != '111111') {
						uni.showToast({
							title: '验证码不正确',
							icon: 'none'
						});
					} else {
						that.login()
					}
				}

			},

			//登录
			login() {
				const that = this

				uni.request({
					method: 'POST',
					url: 'http://192.168.3.45:7001/login',
					data: {
						phone: that.phone,
						code: that.code
					},
					success: (res) => {
						
						if(res.data.data.length==0){
							that.addNewUser()
							
						}else {
							let userInfo = JSON.stringify((res.data.data)[0])
							console.log('登录成功')
							uni.setStorageSync('userInfo', userInfo)
							uni.reLaunch({
							    url: '/pages/home/home'
							});
						}
						
					},
					fail: (res) => {
						console.log('服务异常，请稍后重试')
					}
				});

			},
			
			//新增用户
			addNewUser() {
				const that = this
				uni.request({
					method: 'POST',
					url: 'http://192.168.3.45:7001/addUser',
					data: {
						phone: that.phone
					},
					success: (res) => {
						console.log('新增用户成功')
						that.login()
					},
					fail: (res) => {
						console.log('服务异常，请稍后重试')
					}
				});
				
			}

		}
	}
</script>

<style lang="scss" scoped>
	.login {
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;

		.login-box {
			width: 100%;
			height: 60vh;
			padding: 0 40rpx;

			.title {
				font-size: 40rpx;
				font-weight: 700;
				text-align: center;
				margin-bottom: 100rpx;
			}

			.form-item {
				.uni-input {
					height: 100rpx;
					padding: 0 20rpx;
					border-bottom: 1px solid $uni-border-color;
					margin-bottom: 60rpx;
				}

				button {
					background: $uni-text-color-disable;
					color: #fff;

					&.active {
						background: $uni-color-theme;
					}
				}
			}
		}

	}
</style>
