<template>
  <a-form-item :label="element.options.label">
    <!-- input输入框 -->
    <a-input
      v-if="el === 'a-input'"
      :style="{ width: element.options.width }"
     :placeholder="element.options.placeholder"
    ></a-input>
    <!-- select单选框 -->
    <a-select
      v-if="el === 'a-select'"
     :placeholder="element.options.placeholder"
    >
      <a-select-option v-for="(item, index) in element.options.options" :key="index">
        {{item.name}}
      </a-select-option>
    </a-select>
  </a-form-item>
</template>
<script>
export default {
  props: {
    element: {
      type: Object
    }
  },
  computed: {
    el() {
      return this.element.el
    }
  },
  data() {
    return {

    }
  }
}
</script>
<style lang="less" scoped>

</style>