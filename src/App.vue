<template>
  <div id="app">

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

<script>
export default {
  name: 'app',
  methods: {
    // 返回一个特定的 DOM 节点，作为挂载的父节点
    getContainer () {
      return document.querySelector('.my-container')
    }
  }
}
</script>

<style lang="less">
// @import url("");

</style>
