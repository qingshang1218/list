<template>
	<view class="centro">
		<view class="fanhui">
			<uni-icons type="arrowthinleft" size="30" @click="fanhui"></uni-icons>
		</view>
		<view class="butten" @click="close()">
			退出登录
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
			fanhui() {
				uni.navigateBack({
					url:'user'
				})
			},
			close() {
				
				try {
					uni.reLaunch({
					    url: 'logn'
					});
					uni.setStorageSync('logntai', 0);
				} catch (e) {
				    // error
					console.log(e)
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.centro {
		background-color: #b1b0b2;
		min-height: 1350upx;
		
		.fanhui {
			width: 100%;
			height: 40upx;
			padding-top: 30upx;
		}
		
		.butten {
			width: 50%;
			height: 150upx;
			margin-left: 25%;
			border-bottom-left-radius: 100upx;
			border-bottom-right-radius: 100upx;
			border-top-left-radius: 100upx;
			border-top-right-radius: 100upx;
			background-color: #f76565;
			color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 1000upx;
		}
	}
</style>
