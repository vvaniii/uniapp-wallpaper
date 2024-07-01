<template>
	<view class="preview">
		<swiper circular>
			<swiper-item v-for="item in 5">
				<image src="../../common/images/preview1.jpg" mode="aspectFill" @click="maskChange"></image>
			</swiper-item>
		</swiper>
		<view class="mask" v-show="maskState">
			<view class="goBack"> </view>
			<view class="count">3/9</view>
			<view class="time"><uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat></view>
			<view class="date"><uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat></view>
			<view class="footer">
				<view class="box" @click="clickInfo">
					<uni-icons type="info" size="28"></uni-icons>
					<view class="text">
						信息
					</view>
				</view>
				<view class="box">
					<uni-icons type="star" size="28"></uni-icons>
					<view class="text">
						5分
					</view>
				</view>
				<view class="box">
					<uni-icons type="download" size="23"></uni-icons>
					<view class="text">
						下载
					</view>
				</view>
			</view>

		</view>
		<uni-popup ref="infoPopup" type="bottom">
			 <view class="infoPopup" >
			 	<view class="popHander">
					<view></view>
			 		<view class="title">壁纸信息</view>
					<view class=" close" @click="clickInfoClose">
						<uni-icons type="closeempty" size="18" color="999"></uni-icons>
					</view>
			 	</view>
				<scroll-view scroll-y>
					<view class="content">
						<view class="row" >
							<view class="label">壁纸ID:</view>
							<text selectable class="value">123</text>
						</view>
						<view class="row" >
							<view class="label">分类：</view>
							<text  class="value class">明星美女</text>
						</view>
						<view class="row" >
							<view class="label">发布者：</view>
							<text selectable class="value">123</text>
						</view>
						<view class="row" >
							<view class="label">评分：</view>
							<view class="value roteBox">
								<uni-rate readonly touchable value="3.5" size="16"></uni-rate>
								<text class="score">5分</text>
							</view>
						</view>
						<view class="row" >
							<view class="label">摘要：</view>
							<view  class="value">
								摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要
							</view>
						</view>
						<view class="row" >
							<view class="label">标签：</view>
							<view  class="value tabs">
								<view class="tab" v-for="item in 3"> 标签名</view>
							</view>
						</view>
						<view class="copyright"> 声明：本图片来源于用户投稿，非商业使用，用于学习交流...</view>
					</view>
				</scroll-view>
			 </view>
		</uni-popup>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const maskState = ref(true)
const infoPopup = ref(null)
const maskChange = ()=>{
	maskState.value = !maskState.value
}
//点击info弹窗
 const clickInfo = ()=>{
	 infoPopup.value.open()
	
 }
 //关闭信息弹窗
 const clickInfoClose = ()=>{
	  infoPopup.value.close()
 }
</script>

<style lang="scss" scoped>
	.preview {
		width: 100%;
		height: 100vh;
		position: relative;

		swiper {
			width: 100%;
			height: 100%;

			image {
				width: 100%;
				height: 100%;
			}
		}
		.mask {
			&>view{
				position: absolute;
				left:0;
				right: 0;
				margin: auto;
				color: #fff;
			}
			.goBack {
				
			}
			.count{
				top: 10vh;
				width: fit-content;
				background: rgba(0,0,0,0.3);
				font-size: 28rpx;
				
				border-radius: 40rpx;
				padding:8rpx,28rpx;
				backdrop-filter: blur(10rpx);
			}
			.time {
				
				width: fit-content;
				font-size: 140rpx;
				top: calc(10vh + 80rpx);
				font-weight: 100;
				line-height: 1em;
				text-shadow: 0 4rpx rgba(0,0,0,0.3);
				
			}
			.date {
			    width: fit-content;
				font-size: 34rpx;
				top: calc(10vh + 230rpx);
				text-shadow: 0 2rpx rgba(0,0,0,0.3);
					
			}
			.footer {
				background: rgba(255,255,255,0.8);
				bottom: 10vh;
				width: 65vw;
				height: 120rpx;
				border-radius: 120rpx;
				color: #000;
				display: flex;
				justify-content: space-around;
				align-items: center;
				box-shadow: 0 2rpx rgba(0,0,0,0.1);
				backdrop-filter: blur(20rpx);
				.box {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					padding: 2rpx 12rpx;
					.text {
						font-size: 26rpx;
						color: $text-font-color-2;
					}
				}
					
				
			}
		}
	
		.infoPopup {
			background: #fff;
			padding: 30rpx;
			border-radius: 30rpx 30rpx 0 0 ;
			overflow: hidden;
			
			.popHander {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.title {
					color: $text-font-color-2;
					font-size: 26rpx;
				}
				.close {
					// border: 1rpx solid red;
					padding: 6rpx;
				}
			}
			scroll-view {
				max-height: 60%;
				
				.content {
					.row {
						display: flex;
						padding: 16rpx 0;
						font-size: 32rpx;
						line-height: 1.7em;
						.label {
							color:  $text-font-color-3;
							width: 140rpx;
							text-align: right;
							font-size: 30rpx;
						}
						.value {
							flex: 1;
							width: 0;
							
						}
						.roteBox {
							display: flex;
							align-items: center;
							.score {
								margin-left: 15rpx;
								font-size: 26rpx;
								color: $text-font-color-2;
							}
							
						}
						.tabs {
							display: flex;
							flex-wrap: wrap;
							.tab {
								border:1px solid $brand-theme-color;
								color: $brand-theme-color;
								font-size: 22rpx;
								padding: 10rpx 30rpx;
								border-radius: 40rpx;
								line-height: 1em;
								margin: 0 10rpx 10rpx 0;
							}
						}
						.class {
							color: $brand-theme-color;
						}
					
					}
					.copyright {
						font-size: 28rpx;
						padding: 20rpx;
						background: #f6f6f6;
						color: #666;
						border-radius: 10rpx;
						margin:20rpx 0;
						line-height: 1.6em;
						
					}
				}
			}
		}
	}
</style>