<template>
  <div>
    <headers />
    <router-view class="m-t">

    </router-view>

    <footers />
    <navright />
  </div>
</template>

<script>
import headers from '@/components/header'
import footers from '@/components/footer'
import navright from '@/components/navRight'

export default {
  name: 'App',
  components: {
    headers,
    footers,
    navright
  }
}
</script>

<style>
.m-t{
  box-sizing: border-box;
  padding: 90px 0 0 0;
}
</style>
