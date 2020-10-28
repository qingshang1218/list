<template>
	<view class="centor">
		<view class="tatle">
			<text class="tatle_text">本次运动提升</text>
			<image src="../../static/logo.png" mode="" class="img"></image>
		</view>
		<view class="schedule" v-for="(item,index) in 6" :key="index">
			<text class="schedule_tatle">速度</text>
			<view class=" target">
				<view class="text">
				  	<text class="tatle">目标</text>
					<view class="sanjiao"></view>
				  </view>
				<cmd-progress :percent="70" :success-percent="30" :stroke-width="18" status="active"></cmd-progress>
			</view>
		</view>
		<view class="statistics">
			<text class="sta">小跑步 * 120</text>
			<text class="sta">深蹲跳 * 30</text>
			<text class="sta">高抬腿 * 50</text>
			<text class="sta">划船 * 70</text>
		</view>
		<view class="buttn" @click="growthRecord">
			查看成长记录
		</view>
	</view>
</template>

<script>
	import cmdProgress from "@/components/cmd-progress/cmd-progress.vue"
	export default {
		components: {cmdProgress},
		data() {
			return {
				
			};
		},
		methods:{
			growthRecord() {
				uni.navigateTo({
					url:'user'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.centor {
		min-height: 1300upx;
		background-color: #f5f5f5;
		padding-top: 150upx;
		
		.tatle {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 80%;
			margin-left: 10%;
			margin-bottom: 30upx;
			.tatle_text {
				font-size: 40upx;
			}
			
			.img {
				width: 150upx;
				height: 150upx;
			}
		}
		
		.schedule {
			width: 80%;
			margin-left: 10%;
			display: flex;
			justify-content: space-between;
			
			.schedule_tatle {
				font-size: 40upx;
				color: #818181;
				margin-top: 120upx;
			}
			.target {
				width: 80%;
				// border: 1upx solid #007AFF;
				padding-top: 30upx;
				padding-bottom: 10upx;
				
				.text {
					 display: flex;
					 flex-direction: column;
					 justify-content: center;
					 margin-left: 80%;
					 
					 .tatle {
						 color: #fff;
						 font-size: 25upx;
					 }
					 .sanjiao {
						 width: 0;
						 height: 0;
						 border-left: 10px solid transparent;
						 border-right: 10px solid transparent;
						 border-top: 20px solid #ffffff;
					}
				}
			}
		}
		
		.statistics {
			width: 80%;
			min-height: 400upx;
			margin-left: 10%;
			display: flex;
			flex-direction: column;
			padding-top: 500upx;
			padding-bottom: 500upx;
			.sta {
				margin: 20upx auto;
				color: #818181;
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
			margin-bottom: 140upx;
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
