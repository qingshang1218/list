<template>
	<view class="contatle">
		<view class="fanhui">
			<uni-icons type="arrowthinleft" size="30" @click="fanhui"></uni-icons>
		</view>
		<image src="../../static/logo.png" mode="" class="head"></image>
		<view class="masg">
			<form @submit="" @reset="">
				<view class="input">
					<input type="number" value="" placeholder="身高" class="in">
				</view>
				<view class="input">
					<input type="number" value="" placeholder="体重" class="in">
				</view>
				<view class="input">
					<input type="text" value="" placeholder="性别" class="in">
				</view>
				<view class="input">
					<input type="number" value="" placeholder="年龄" class="in">
				</view>
				<view class="submit">
					确定
				</view>
				<!-- <button form-type="submit">Submit</button>
				<button form-type="reset">Reset</button> -->
			</form>
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

<style lang="scss">
	.contatle {
		min-height: 1335upx;
		background-color: #b1b0b2;
		
		.fanhui {
			width: 100%;
			height: 40upx;
			padding-top: 30upx;
		}
		
		.head {
			width: 100upx;
			height: 100upx;
			margin-left: 45%;
			margin-top: 100upx;
		}
		
		.masg {
			width: 90%;
			margin-left: 5%;
			margin-top: 180upx;
			
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
					width: 100upx;
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
				margin-top: 30upx;
			}
		}
	}
</style>
