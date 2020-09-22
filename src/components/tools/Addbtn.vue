<template>
  <div>
    <a-button
      type="primary"
      icon="plus"
      @click="()=>{this.$emit('newadd')}"
    >{{text}}</a-button>
  </div>

</template>
<script>
export default {
  props: ['text'],
};
</script>
<style lang="less" scoped>
</style>

