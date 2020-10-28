<template>
	<view class="contatle">
		<view class="fanhui">
			<uni-icons type="arrowthinleft" size="30" @click="fanhui"></uni-icons>
		</view>
		<view class="iphonelogn">
			<form @submit="" @reset="" >
				<view class="input">
					<input type="number" value="" placeholder="手机" class="in" v-model="mobilePhoneNumber">
				</view>
				<view class="verification">
					<view class="butten" @tap="sendSmsCode()" >
						验证码
					</view>
					<view class="inputs">
						<input type="number" value=""  class="in" v-model="smsCode">
					</view>
					
				</view>
				<view class="submit" @tap="login()">
					确定
				</view>
				<!-- <button form-type="submit">Submit</button>
				<button form-type="reset">Reset</button> -->
			</form>
		</view>
		
	</view>
</template>

<script>
	const AV = require('lib/av-core-min.js');
	const adapters = require('lib/leancloud-adapters-weapp.js');
	AV.setAdapters(adapters);
	export default {
		data() {
			return {
				mobilePhoneNumber: '',
				smsCode: ''
			};
		},
		methods:{
			fanhui() {
				uni.navigateBack({
					url:'log'
				})
			},
			
			sendSmsCode() {
				uni.request({
				    url: 'https://6al2umwl.lc-cn-n1-shared.com/1.1/requestSmsCode', //仅为示例，并非真实接口地址。
					method:'POST',
				    data: {
				        mobilePhoneNumber:this.mobilePhoneNumber,
						ttl:3,
						name:'happy健身',
						op:'验证',
				    },
				    header: {
					   
					   'X-LC-Id':'6aL2UmwL0TEsl3mTMP1Qb5r2-gzGzoHsz',
					   'X-LC-Key':'EDKCcmrVD9I4LN9fGOvTEFMr',
					   'Content-Type':'application/json'
				    },
				    success: (res) => {
				        console.log(res.data);
				        this.text = 'request success';
						console.log("success")
						// this.disabled = true;
				    },
					fail(e) {
						console.log(e);
					}
				});
			},
			
			login() {
				uni.request({
				    url: 'https://6al2umwl.lc-cn-n1-shared.com/1.1/verifySmsCode/'+this.smsCode, //仅为示例，并非真实接口地址。
					method:'POST',
				    data: {
				        mobilePhoneNumber:this.mobilePhoneNumber,
				    },
				    header: {
					   
					   'X-LC-Id':'6aL2UmwL0TEsl3mTMP1Qb5r2-gzGzoHsz',
					   'X-LC-Key':'EDKCcmrVD9I4LN9fGOvTEFMr',
					   'Content-Type':'application/json'
				    },
				    success: (res) => {
				        console.log(res.data);
				        this.text = 'request success';
						uni.redirectTo({
							url: 'index'
						});
						
						try {
							uni.setStorageSync('logntai', 1);
						} catch (e) {
							// error
							console.log(e)
						}
				    },
					fail(e) {
						console.log(e);
					}
				});
			}
			
		}
	}
</script>

<style lang="scss">
	.contatle {
		
		.fanhui {
			width: 100%;
			height: 40upx;
			padding-top: 30upx;
		}
		
		.iphonelogn {
			width: 90%;
			min-height: 400upx;
			margin-left: 5%;
			margin-top: 400upx;
			
			.input {
				width: 100%;
				height: 100upx;
				border-bottom-left-radius: 120upx;
				border-bottom-right-radius: 120upx;
				border-top-left-radius: 120upx;
				border-top-right-radius: 120upx;
				background-color: #ededed;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-top: 30upx;
				
				.in {
					height:100%;
					font-size: 40upx;
					// width: 100upx;
				}
			}
			
			.verification {
				width: 100%;
				height: 100upx;
				border-bottom-left-radius: 120upx;
				border-bottom-right-radius: 120upx;
				border-top-left-radius: 120upx;
				border-top-right-radius: 120upx;
				background-color: #ededed;
				display: flex;
				flex-direction: row-reverse;
				// align-items: center;
				// justify-content: center;
				margin-top: 30upx;
				
				.inputs {
					width: 60%;
					height: 100upx;
					
					.in {
						height:100%;
						font-size: 40upx;
						margin-left: 120upx;
					}
				}
				
				.butten {
					width: 40%;
					height: 100%;
					background-color: #333333;
					border-top-right-radius: 120upx;
					border-bottom-right-radius: 120upx;
					display: flex;
					align-items: center;
					justify-content: center;
					color: #818181;
				}
			}
			
			.submit {
				width: 90%;
				height: 200upx;
				margin-left: 5%;
				border-bottom-left-radius: 120upx;
				border-bottom-right-radius: 120upx;
				border-top-left-radius: 120upx;
				border-top-right-radius: 120upx;
				background-color: #f7f7f7;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-top: 50upx;
				box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3 );
			}
		}
	}
</style>
