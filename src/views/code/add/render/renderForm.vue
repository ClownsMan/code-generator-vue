<template>
  <a-form :form="form" :layout="formOptions.labelType" :label-col="{ span: formOptions.labelCol }" :wrapper-col="{ span: formOptions.wrapperCol }">
    <div class="renderItem" v-for="item in renderList" :key="item.el">
      <!-- 如果是栅格模式 -->
      <template v-if="item.el === 'grid'">
        <a-row class="gridItem">
          <a-col v-for="(itm, idx) in item.options.column" :key="idx" :span="itm.span">
            <div class="gridItem" v-for="list in itm.list" :key="list.el">
              <render-form-item :element="list"></render-form-item>
            </div>
          </a-col>
        </a-row>
      </template>
      <!-- 如果是普通表单元素 -->
      <template v-else>
        <render-form-item :element="item"></render-form-item>
      </template>
    </div>
  </a-form>
</template>
<script>
import renderFormItem from './renderFormItem';
export default {
  props: {
    jsonData: {
      type: Object
    }
  },
  components: {
    renderFormItem
  },
  computed: {
    formOptions() {
      return this.jsonData.config
    },
    renderList() {
      return this.jsonData.list
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