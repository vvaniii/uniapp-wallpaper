<template>
	<view class="layout">
		<view class="navbar">
			<view class="statusBar" :style="{height:statusBarHeight+'px'}">

			</view>
			<view class="titleBar" :style="{height:titleBarHeight + 'px'}">
				<view class="title">标题</view>
				<view class="search">
					<uni-icons class="icon" type="search" color="#888" size="18"></uni-icons>
					<text class="text">搜索</text>
				</view>
			</view>
		</view>
		<view class="fill" :style="{height:statusBarHeight+titleBarHeight + 'px'}">

		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

let SYSTEM_INFO= uni.getSystemInfoSync()
let statusBarHeight =  ref(SYSTEM_INFO.statusBarHeight)

let {height,top} =  uni.getMenuButtonBoundingClientRect()
let titleBarHeight =ref( height +(top - statusBarHeight.value) * 2)
console.log(titleBarHeight);

</script>

<style lang="scss" scoped>
	.layout {
		.navbar {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 10;
			background: 
			linear-gradient(to bottom, transparent, #fff 400rpx),
			linear-gradient(to right, #beecd8 20%, #f4e2d8);
			

			.statusBar {
				
			}

			.titleBar {

				display: flex;
				align-items: center;
				padding: 0 30rpx;
				
				.title {
					font-size: 22px;
					font-weight: 700;
					color: $text-font-color-1;
				}

				.search {
					width: 220rpx;
					height: 50rpx;
					border-radius: 60rpx;
					background: rgba(255, 255, 255, 0.4);
					border: 1px solid #fff;
					margin-left: 30rpx;
					color: #999;
					font-size: 28rpx;
					display: flex;
					align-items: center;

					.icon {
						margin-left: 5rpx;
					}

					.text {
						padding-left: 10rpx;
					}
				}
			}
		}
	}
</style>