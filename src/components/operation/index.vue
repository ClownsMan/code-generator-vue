<template>
  <div style="display:inline-block;">
    <a-popconfirm :title="title" @confirm="$emit('onConfirm')" okText="确定" cancelText="取消">
      <a>{{text}}</a>
    </a-popconfirm>
  </div>
</template>
<script>
export default {
  props: ["text", "title"]
};
</script>