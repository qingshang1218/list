<template>
	<view class="concetr">
		<view class="fanhui">
			<uni-icons type="arrowthinleft" size="30" @click="fanhui"></uni-icons>
		</view>
		<image src="../../static/logo.png" mode="" class="pro"></image>
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
			}
		}
	}
</script>

<style lang="less">
	.concetr {
		background-color: #b1b0b2;
		min-height: 1350upx;
		
		.fanhui {
			width: 100%;
			height: 40upx;
			padding-top: 30upx;
		}
		
		.pro {
			width: 100%;
			height: 900upx;
			margin-top: 80px;
		}
	}
</style>
