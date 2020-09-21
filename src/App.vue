<template>
	<div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
		
		<main-tabbar class="tabbar"></main-tabbar>
	</div>
</template>

<script>
	import MainTabbar from 'components/content/MainTabbar.vue'
	export default {
		name: 'App',
		components: {
			MainTabbar
		}
	}
</script>

<style>
	@import url("assets/css/base.css");
  .tabbar {
    z-index: 999;
  }
</style>
