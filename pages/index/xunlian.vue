 <template>
	  <view class="container">
		    <view class="gime">
			  <image src="http://lc-6aL2UmwL.cn-n1.lcfile.com/233164bf9b367910b4a4.jpg" mode="" class="gime_img"></image>
			  <view class="play">
			  	<view class="playbut"></view>
			  </view>
			  <view class="cler" @click="clos">
			  	x
			  </view>
		    </view>
		    <text class="tatle">超级跑酷</text>
			<view class="dimensionality">
				<text class="dim_tatle">训练维度</text>
				<view class="dim_img">
					<image src="../../static/logo.png" mode=""class="dim_img"></image>
					<image src="../../static/logo.png" mode=""class="dim_img"></image>
					<image src="../../static/logo.png" mode=""class="dim_img"></image>
				</view>
			</view>
			<view class="movement">
				<text class="dim_tatle">训练维度</text>
				<scroll-view class="scroll-view_H" scroll-x="true" >
					<view id="demo1" class="scroll-view-item_H uni-bg-red" v-for="(item,index) in 3" :key="index">
						<view class="mov">
							<text class="movmasg">深蹲*20</text>
							<image src="../../static/logo.png" mode="" class="mov_img"></image>
							<view class="butten">
								<text class="masg">0/20</text>
								<text class="masg">start</text>
								<text class="masg">></text>
							</view>
						</view>
					</view>
					
				</scroll-view>
			</view>
			
			<view class="constitute">
				<text class="contatle">游戏锻炼构成</text>
				<view class="ridos">
					
				</view>
			</view>
			<view class="buttn" @click="user">
				开始锻炼 !
			</view>
	  </view>
	  
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			clos() {
				uni.navigateBack({
					url:'index'
				})
			},
			user() {
				uni.navigateTo({
					url:'user'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.container {
		padding-bottom: 500upx;
		.gime {
			width: 100%;
			height: 400upx;
			margin-bottom: 40upx;
			background-color: #4CD964;
			
			.gime_img {
				height: 100%;
				width: 100%;
			}
			
			.play {
				width: 14%;
				height: 8%;
				display: flex;
				justify-content: center;
				align-items: center;
				background: rgba(219, 174, 213,0.5);
				-moz-border-radius: 50%;
				-webkit-border-radius: 50%;
				border-radius: 50%;
				position: absolute;
				left: 42%;
				top: 10%;
				// margin: -200upx auto;
				// margin-top: -150upx;
				.playbut {
					width: 0;
					height: 0;
					border-top: 15px solid transparent;
					border-left: 30px solid #fff;
					border-bottom: 15px solid transparent;
					margin-left: 10upx;
				}
			}
			
			.cler {
				width: 30px;
				height: 30px;
				display: flex;
				justify-content: center;
				align-items: center;
				background: rgba(219, 174, 213,0.5);
				-moz-border-radius: 50px;
				-webkit-border-radius: 50px;
				border-radius: 50px;
				position: absolute;
				color: #fff;
				right:  0upx;
				top: 3%;
			}
		}
		
		.tatle {
			font-size: 60upx;
			// font-weight: bold;
			margin-left:5%;
		}
		.dimensionality {
			display: flex;
			flex-direction: column;
			margin-left: 5%;
			margin-top: 30upx;
			
			.dim_tatle {
				font-size: 45upx;
				color: #999999;
			}
			
			.dim_img {
				display: flex;
				flex-direction: row;
				margin-top: 20upx;
				
				.dim_img {
					width: 100upx;
					height: 100upx;
					margin-left: 20upx;
				}
				
				.dim_img:first-child {
					margin-left: 0upx;
				}
			}
		}
		
		.movement {
			margin-left: 5%;
			margin-top: 30upx;
			
			.dim_tatle {
				font-size: 45upx;
				color: #999999;
			}
			
			.scroll-view_H {
				white-space: nowrap;
				width: 100%;
				margin-top: 30upx;
				
				.scroll-view-item_H {
					display: inline-block;
					width: 400upx;
					height: 500rpx;
					// line-height: 300rpx;
					// text-align: center;
					// font-size: 36rpx;
					margin-left: 30upx;
					// display: flex;
					// flex-direction: column;
					.mov {
						display: flex;
						flex-direction: column;
						width: 100%;
						height: 100%;
						
						.butten {
							width: 90%;
							height: 100upx;
							border-bottom-left-radius: 120upx;
							border-bottom-right-radius: 120upx;
							border-top-left-radius: 120upx;
							border-top-right-radius: 120upx;
							background-color: #5cc7c3;
							display: flex;
							justify-content: space-around;
							align-items: center;
							margin-top: -150upx;
							margin-left: 5%;
							
							.masg {
								font-size: 30upx;
								color: #fff;
							}
						}
						.movmasg {
							color: #999999;
						}
						
						.mov_img {
							width: 100%;
							height: 85%;
							margin-top: 30upx;
						}
					}
					
				}
			}
		}
		
		.constitute {
			width: 90%;
			height: 650upx;
			margin-left: 5%;
			margin-top: 30upx;
			
			.contatle {
				font-size: 45upx;
				color: #999999;
			}
			
			.ridos {
				width: 100%;
				height: 100%;
				background: #e5e1e1;
				-moz-border-radius: 50%;
				-webkit-border-radius: 50%;
				border-radius: 50%;
				margin-top: 30upx;
			}
		}
		
		.buttn {
			width: 70%;
			height: 210upx;
			margin-left: 13%;
			background-color: #fff;
			font-size: 50upx;
			display: flex;
			justify-content: center;
			align-items: center;
			/* border: 1upx solid #007AFF; */
			border-bottom-left-radius: 120upx;
			border-bottom-right-radius: 120upx;
			border-top-left-radius: 120upx;
			border-top-right-radius: 120upx;
			margin-bottom: 50upx;
			box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3 );
			
			background-color: white;
			position: fixed;  
			bottom: 0;  
			left: 0;  
			right: 0;  
			display: flex;  
			align-items: center;  
			padding: 10px 10px;  
			padding-bottom: constant(safe-area-inset-bottom );  
			padding-bottom: calc(env(safe-area-inset-bottom) + 10px);  
			border-top: #f6f6f6 solid 1px; 
			
		}
	}
	
</style>
