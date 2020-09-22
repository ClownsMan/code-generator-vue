<template>
  <div>
    <a-row>
      <a-col :span="6" :offset="18">
        <a-button class="mr10" type="primary">
          保存
        </a-button>
        <a-button class="mr10" type="primary" @click="turnToJson">
          切换至json格式
        </a-button>
        <!-- <a-button type="primary">
          Primary
        </a-button> -->
      </a-col>
    </a-row>
    <a-tabs type="card" @change="callback">
      <a-tab-pane key="1" tab="基础设置">
        <basicSetting ref="basicSetting"></basicSetting>
      </a-tab-pane>
      <a-tab-pane key="2" tab="按钮操作配置">
        <buttonSetting ref="buttonSetting"></buttonSetting>
      </a-tab-pane>
      <a-tab-pane key="3" tab="filterStatus设置">
        <filterStatusSetting ref="filterStatusSetting"></filterStatusSetting>
      </a-tab-pane>
      <a-tab-pane key="4" tab="table设置">
        <tableSetting ref="tableSetting"></tableSetting>
      </a-tab-pane>
    </a-tabs>
    <a-modal
      title="json数据"
      :visible="visible"
      @cancel="buttonAddCancel"
      footer="null"
    >
      <json-viewer
       :value="jsonData"
       copyable
      ></json-viewer>
    </a-modal>
  </div>
</template>

<script>
import basicSetting from './setting/basicSetting';
import buttonSetting from './setting/buttonSetting';
import filterStatusSetting from './setting/filterStatusSetting';
import tableSetting from './setting/tableSetting';
import toJson from './parser/toJson';
export default {
  components: {
    basicSetting,
    buttonSetting,
    filterStatusSetting,
    tableSetting,
  },
  data() {
    return {
      visible: false,
      jsonData: {}
    }
  },
  methods: {
    toJson,
    callback() {},
    turnToJson() {
      let basicSetting = this.$refs.basicSetting.form.getFieldsValue();
      let buttonSetting = this.$refs.buttonSetting.dataSource;
      let filterStatusSetting = this.$refs.filterStatusSetting.form.getFieldsValue();
      let tableSetting = {
        ...this.$refs.tableSetting.form.getFieldsValue(),
        columns: this.$refs.tableSetting.dataSource
      };
      this.jsonData = this.toJson(
        basicSetting,
        buttonSetting,
        filterStatusSetting,
        tableSetting,
      );
      // 打开model
      this.visible = true;
    },
    buttonAddCancel() {
      this.visible = false;
    }
  }
}
</script>
<style lang="less" scoped>
.mr10 {
  margin-right: 10px;
}
</style>