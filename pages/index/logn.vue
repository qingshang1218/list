<template>
	<view class="contatle">
		<view class="fanhui">
			<uni-icons type="arrowthinleft" size="30" @click="fanhui"></uni-icons>
		</view>
		<view class="option">
			<view class="iphon" @click="iphonelog">
				手机
			</view>
			<text class="text">- 或 -</text>
			<!-- @click="open"  @click="gowxlogn"-->
			<image src="../../static/logo.png" mode="" class="weixin"  @click="mobgetUserInfo()"></image>
			<!-- <button type="primary" plain="true" @click="isInstallPlatform()">是否安装平台</button> -->
		</view>
		<uni-popup ref="popup" type="center">
			<view class="tatle">
				<view class="masg">
					<text class="tat">登录</text>
					<text class="mas">使用前请登录</text>
				</view>
				<view class="button">
					<view class="clos">
						Cancel
					</view>
					<view class="yes" @click="gowxlogn">
						OK
					</view>
				</view>
				
			</view>
		</uni-popup>
	</view>
</template>

<script>
	
	const modal = uni.requireNativePlugin('modal');
	const pluginMobShare = uni.requireNativePlugin('mob-sharesdk');
	
	export default {
		data() {
			return {
				loginres:{},
			};
		},
		onLoad() {
			 // 页面加载时使用用户授权逻辑，弹出确认的框  
			    // this.userAuthori zed()
				
		},
		methods:{
		 //    open(){
				
			// },
			
			iphonelog() {
				uni.navigateTo({
					url: 'iphonelogn'
				})
			},
			fanhui() {
				uni.navigateBack({
					url:'user'
				})
			},
			wxlogn(){
				this.ispopiu=true;
				console.log(this.ispopiu)
			},
			gowxlogn(){
				uni.navigateTo({
					url:'numbermasg'
				})
				this.$refs.popup.close()
			},
			mobgetUserInfo() {
				pluginMobShare.getUserInfo({
					platName: 22,
					mobAppkey: '311918686f8a8',
					mobSecret: 'cc38efb0e008b97890f63ae55cc0b8cd',
				}, result => {
					const modal = uni.requireNativePlugin('modal');
					const msg = JSON.stringify(result);
					modal.toast({
						message: msg, 
						duration: 2,
					});
					uni.redirectTo({
						url: 'index'
					});
					
					try {
						uni.setStorageSync('logntai', 1);
					} catch (e) {
						// error
						console.log(e)
					}
				});
			},	
			
			mobAuthorize() {
				pluginMobShare.authorize({
					platName: 22,
					mobAppkey: '311918686f8a8',
					mobSecret: 'cc38efb0e008b97890f63ae55cc0b8cd',
				}, result => {
					const modal = uni.requireNativePlugin('modal');
					const msg = JSON.stringify(result);
					modal.toast({
						message: msg,
						duration: 4,
					});
					console.log(msg);
					uni.setStorageSync('logntai', 1);
					uni.redirectTo({
						url:'index'
					})
				});
			
			},
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
		
		.option {
			width: 90%;
			min-height: 500upx;
			margin-left: 5%;
			// border: 1upx solid #07C160;
			margin-top: 350upx;
			display: flex;
			flex-direction: column;
			
			.iphon {
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
				color: #999999;
			}
			.text {
				margin: 40upx auto;
				color: #999999;
			}
			.weixin {
				width: 100upx;
				height: 100upx;
				margin: 0upx auto;
			}
		}
		
		.tatle {
			width: 600upx;
			height: 300upx;
			border-bottom-left-radius: 50upx;
			border-bottom-right-radius: 50upx;
			border-top-left-radius: 50upx;
			border-top-right-radius: 50upx;
			background-color: #fff;
			
			.masg {
				width: 100%;
				display: flex;
				flex-direction: column;
				padding-top: 30upx;
				
				.tat {
					font-size: 35upx;
					font-weight: bold;
					margin: 0upx auto;
				}
				
				.mas {
					margin: 0upx auto;
				}
			}
			
			.button {
				width: 100%;
				display: flex;
				margin-top: 90upx;
				
				.clos {
					width: 50%;
					height: 100upx;
					color: #1989FA;
					display: flex;
					justify-content: center;
					align-items: center;
					border-right: 1upx solid #999999;
					border-top: 1upx solid #999999;
				}
				
				.yes {
					width: 50%;
					height: 100upx;
					color: #1989FA;
					display: flex;
					justify-content: center;
					align-items: center;
					border-left: 1upx solid #999999;
					border-top: 1upx solid #999999;
				}
			}
			
		}
	}
	
</style>
