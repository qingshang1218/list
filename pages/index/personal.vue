<template>
	<view class="cencto">
		<view class="fanhui">
			<uni-icons type="arrowthinleft" size="30" @click="fanhui"></uni-icons>
		</view>
		<image src="../../static/logo.png" mode="" class="chengzhang"></image>
		<view class="schedule" v-for="(item,index) in 6" :key="index"@click="">
			<text class="schedule_tatle">速度</text>
			<view class=" target">
				<view class="text">
				  	<text class="tatle">目标</text>
					<view class="sanjiao"></view>
				  </view>
				<cmd-progress :percent="70" :success-percent="30" :stroke-width="18" status="active"></cmd-progress>
			</view>
		</view>
	</view>
</template>

<script>
	
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
	    components: {uniIcons},
		data() {
			return {
				
			};
		},
		methods:{
			fanhui() {
				uni.navigateBack({
					url:'user'
				})
			}
		}
	}
</script>

<style lang="less">
	.cencto {
		background-color: #b1b0b2;
		min-height: 1300upx;
		padding-bottom: 100upx;
		
		.fanhui {
			width: 100%;
			height: 40upx;
			padding-top: 30upx;
		}
		
		.chengzhang {
			width: 80%;
			height: 300upx;
			background-color: #fff;
			margin-left: 10%;
			margin-top: 150upx;
			margin-bottom: 50upx;
		}
		
		.schedule {
			width: 80%;
			margin-left: 10%;
			
			display: flex;
			justify-content: space-between;
			
			.schedule_tatle {
				font-size: 40upx;
				color: #818181;
				margin-top: 87upx;
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
	}
</style>
