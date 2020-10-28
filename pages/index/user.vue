<template>
	<view class="content">
		<view class="seting">
			<!-- 用户登录-->
			<image src="../../static/TabMe.png" mode="" class="userimg" @click="usermasg" ></image>
			<!-- @click="setting"  设置 -->
			<image src="../../static/iconSettings.png" mode="" class="userimg"  @click="setting()"></image>
		</view>
		<view class="promote">
			<view class="radio" @click="topersonal">
				24%
			</view>
			<view class="tatle">
				<text class="tatlemage">体质提升</text>
				<image src="../../static/logo.png" mode="" class="tatleimg"></image>
			</view>
		</view>
		<view class="lead" @click="promote">
			<view class="side">
				70%
			</view>
			<view class="tatle" >
				<text class="tatlemage">领先70%同龄人</text>
			</view>
		</view>
		<view class="medal">
			<image src="../../static/logo.png" mode="" class="medalimg"></image>
			<view class="tatle">
				<text class="tatlemage">获得闪电侠</text>
				<image src="../../static/logo.png" mode="" class="tatleimg"></image>
				<text class="tatlemage">勋章</text>
			</view>
		</view>
		<view class="con">
			<image src="../../static/TabDiscover.png" mode="" class="img4" @click="index"></image>
			<image src="../../static/TabMe.png" mode="" class="img4" ></image>
		</view>  
	</view>
</template>

<script>
	// import {
	// 	SSDKContentType,
	// 	SSDKPlatformID,
	// 	SSDKShareParams
	// } from "../../ShareSDK.js"
	
	// const modal = uni.requireNativePlugin('modal');
	// const pluginMobShare = uni.requireNativePlugin('mob-sharesdk');
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			topersonal() {
				uni.navigateTo({
					url:'personal'
				})
			},
			index() {
				uni.redirectTo({
					url:'index'
				})
			},
			
			// mobAuthorize() {
			// 	pluginMobShare.authorize({
			// 		platName: SSDKPlatformID.WeChat,
			// 		mobAppkey: '3092b34f8634a',
			// 		mobSecret: '2c022ea2703055901999efd7bb72c331',
			// 	}, result => {
			// 		const modal = uni.requireNativePlugin('modal');
			// 		const msg = JSON.stringify(result);
			// 		modal.toast({
			// 			message: msg,
			// 			duration: 4,
			// 		});
			// 		console.log(msg);
			// 	});
			
			// },
			// // D1:AF:57:B0:A6:62:29:04:E2:D5:42:A2:E5:9A:ED:35
			// mobgetUserInfo() {
			// 	pluginMobShare.getUserInfo({
			// 		platName: SSDKPlatformID.WeChat,
			// 		mobAppkey: '3092b34f8634a',
			// 		mobSecret: '2c022ea2703055901999efd7bb72c331',
			// 	}, result => {
			// 		const modal = uni.requireNativePlugin('modal');
			// 		const msg = JSON.stringify(result);
			// 		modal.toast({
			// 			message: msg,
			// 			duration: 2,
			// 		});
			
			// 	});
			
			// },
			
			
			usermasg() {
				uni.getStorage({
					key: 'logntai',
					success: function (res) {
						if(res.data == 1) {
							uni.navigateTo({
								url:'usermasg'
							})
						}else {
							url:'logn'
						}
					},
				});
			},
			setting() {
				uni.navigateTo({
					url:'setting'
				})
			},
			promote() {
				uni.navigateTo({
					url:'promote'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.content {
		min-height: 1300upx;
		padding-top: 30upx;
		padding-bottom: 200upx;
		background-color: #f5f5f5;
		.seting {
			width: 90%;
			margin-left: 5%;
			display: flex;
			justify-content: space-between;
			
			.userimg {
				width: 50upx;
				height: 50upx;
			}
		}
		
		.promote {
			width: 90%;
			height: 400upx;
			margin-left: 5%;
			margin-top: 30upx;
			
			.radio {
				width: 300upx;
				height: 300upx;
				background: #6ebdc4;
				-moz-border-radius: 50%;
				-webkit-border-radius: 50%;
				border-radius: 50%;
				color: #fff;
				font-size: 80upx;
				display: flex;
				align-items: center;
				justify-content: center;
				margin: 0upx auto;
			}
			
			.tatle {
				display: flex;
				justify-content: center;
				margin-top: 20upx;
				
				.tatlemage {
					font-size: 40upx;
					color: #333333;
				}
				
				.tatleimg {
					width: 50upx;
					height: 50upx;
					margin-left: 10upx;
				}
			}
		}
		
		.lead {
			width: 90%;
			height: 400upx;
			margin-left: 5%;
			margin-top: 80upx;
			
			.side {
				width: 300upx;
				height: 300upx;
				border-radius: 20%;
				background-color: #ffffff;
				font-size: 80upx;
				display: flex;
				align-items: center;
				justify-content: center;
				margin: 0upx auto;
				box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3 );
			}
			.tatle {
				display: flex;
				justify-content: center;
				margin-top: 40upx;
				
				.tatlemage {
					font-size: 40upx;
					color: #333333;
				}
			}
		}
		
		.medal {
			width: 90%;
			height: 400upx;
			margin-left: 5%;
			margin-top: 80upx;
			
			.medalimg {
				width: 300upx;
				height: 300upx;
				margin-left: 30%;
			}
			
			.tatle {
				display: flex;
				justify-content: center;
				margin-top: 20upx;
				
				.tatlemage {
					font-size: 35upx;
					color: #333333;
				}
				
				.tatleimg {
					width: 40upx;
					height: 40upx;
					margin-left: 10upx;
				}
			}
		}
		
		.con {
		  background-color: white;  
		  position: fixed;  
		  bottom: 0;  
		  left: 0;  
		  right: 0;  
		  display: flex;  
		  justify-content: space-around;
		  /* padding: 10px 10px; */ 
		  padding-top: 30upx;
		  /* padding-bottom: constant(safe-area-inset-bottom);  
		  padding-bottom: calc(env(safe-area-inset-bottom) + 20px);  
		  border-top: #f6f6f6 solid 1px; */
		  height: 80upx;
		  
		  .img4 {
		  	width: 50upx;
		  	height: 50upx;
		  }
		} 
	}
</style>
