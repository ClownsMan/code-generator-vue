<template>
  <div>
    <a-row class="customer">
      <a-col class="formArea" :span="5">
        <draggable v-model="formStr"  :group="formGroup" ghostClass="ghost" chosenClass="chosen" animation="300" @end="addEnd">
            <transition-group>
              <div class="formItem" v-for="item in formStr" :key="item.el">
                {{item.name}}
              </div>
            </transition-group>
        </draggable>
      </a-col>
      <a-col class="editArea" :span="12">
        <div class="bb1">
          <a class="mr10" @click="clearForm" href="javascript:void(0)">清空</a>
          <a class="mr10" @click="previewPage" href="javascript:void(0)">预览</a>
          <a class="mr10"  @click="toJson"  href="javascript:void(0)">生成json</a>
          <a href="javascript:void(0)">生成代码</a>
        </div>
        <a-form :form="form" :layout="formOptions.labelType" :label-col="{ span: formOptions.labelCol }" :wrapper-col="{ span: formOptions.wrapperCol }">
          <draggable v-model="renderList"  group="itxst" ghostClass="ghost" chosenClass="chosen" animation="300">
              <transition-group class="form-render-group">
                <div :class="[ currentUuid === item.uuid ? 'current' : '' , 'renderItem']" v-for="(item, index) in renderList" :key="item.el" @click="handlerRenderItem(item, index)">
                  <!-- 如果是栅格模式 -->
                  <template v-if="item.el === 'grid'">
                    <a-row class="gridItem">
                      <a-col v-for="(itm, idx) in item.options.column" :key="idx" :span="itm.span">
                        <draggable v-model="itm.list" group="itxst" ghostClass="ghost" chosenClass="chosen" animation="300">
                          <transition-group :data-id="idx" class="grid-render-group">
                            <div :class="[ currentUuid === list.uuid ? 'current' : '' , 'gridItem']" v-for="(list, id) in itm.list" :key="list.el" @click.stop="handlerGridItem(list, index, idx, id)">
                              <render-form-item :element="list"></render-form-item>
                              <div v-if="currentUuid === list.uuid" class="prt">
                                <!-- <a-icon class="ms10 f10" type="copy" @click="copyGrid(list.uuid)" /> -->
                                <a-icon class="mr10 f10" type="delete" @click="deleteGrid(list.uuid, index, idx, id)" />
                              </div>
                            </div>
                          </transition-group>
                        </draggable>
                      </a-col>
                    </a-row>
                  </template>
                  <!-- 如果是普通表单元素 -->
                  <template v-else>
                    <render-form-item :element="item"></render-form-item>
                  </template>
                  <!-- 当前表单编辑区域 -->
                  <div v-if="currentUuid === item.uuid" class="prt">
                    <a-icon class="ms10 f10" type="copy" @click="copyForm(item.uuid)" />
                    <a-icon class="mr10 f10" type="delete" @click="deleteForm(item.uuid)" />
                  </div>
                </div>
              </transition-group>
          </draggable>
        </a-form>
      </a-col>
      <a-col class="propsArea" :span="7">
        <a-tabs default-active-key="formItem">
          <a-tab-pane key="formItem" tab="字段属性">
            <fieldSetting
             :options="currentItem"
            ></fieldSetting>
             <!-- @currentItemChange="currentItemChange" -->
          </a-tab-pane>
          <a-tab-pane key="formBasic" tab="表单属性">
            <formSetting
              :options="formOptions"
            ></formSetting>
          </a-tab-pane>
          <a-tab-pane key="formSubmit" tab="业务属性">
            1.提交按钮 2.提交接口 3.表单类型: 普通提交表单、审批流添加表单
          </a-tab-pane>
        </a-tabs>
      </a-col>
    </a-row>
    <!-- json模态框 -->
    <a-modal
      title="json数据"
      :visible="visible"
      @cancel="buttonAddCancel"
      :footer="null"
    >
      <json-viewer
       :value="jsonData"
       copyable
      ></json-viewer>
    </a-modal>
    <!-- 预览页面模态框 -->
    <a-modal
      title="预览页面"
      :visible="pageVisible"
      @cancel="previewPageCancel"
      :footer="null"
    >
      <renderForm :jsonData="jsonData"></renderForm>
    </a-modal>
  </div>
</template>

<script>
import formStr from './element/formStr.js';
import draggable from 'vuedraggable';
import renderFormItem from './render/renderFormItem';
import renderForm from './render/renderForm';
import formSetting from './element/formSetting.vue';
import fieldSetting from './element/fieldSetting.vue';
export default {
  components: {
    draggable,
    renderFormItem,
    renderForm,
    formSetting,
    fieldSetting
  },
  data() {
    return {
      formStr,
      formGroup: {
        name: 'itxst',
        pull: 'clone',
      },
      renderList: [], // 渲染数组
      form: this.$form.createForm(this),
      formOptions: {
        labelType: 'horizontal',
        labelWidth: 4,
        labelCol: 8,
        wrapperCol: 16
      },
      currentUuid: null, // 当前选择的表单组件uuid
      currentItem: null, // 当前选择的表单组件对象
      currentIndex: null, // 当前选择的表单index
      visible: false, // json模态框展示是否
      pageVisible: false, // 预览页面模态框展示是否
      jsonData: null, // json展示数据
    }
  },
  methods: {
    // 克隆,深拷贝对象
    cloneData (original) {
      // 添加一个modal标题
      // original.obj.modalTitle = original.obj.name || '';
      // 深拷贝对象，防止默认空对象被更改
      // return JSON.parse(JSON.stringify(original));
    },
    addEnd(data) {
      let currentIndex = data.newIndex;
      let currentItem = JSON.parse(JSON.stringify(this.renderList[currentIndex]));
      // 判断是否为栅格的元素
      let uuid = new Date().getTime();
      if(currentItem.el === 'grid' && data.to.classList[0] === 'grid-render-group') {
        let idx = data.to.dataset.id;
        let id = currentItem.options.column[idx].list.findIndex(item => {
          return !item.uuid;
        })
        currentItem.options.column[idx].list[id].uuid = uuid;
        this.currentIndex = {
          index: currentIndex,
          idx,
          id
        };
        this.currentItem = currentItem.options.column[idx].list[id];
      }else {
        currentItem.uuid = uuid;
        this.currentIndex = currentIndex;
        this.currentItem = currentItem;
      }
      this.renderList.splice(currentIndex, 1, currentItem);
      this.currentUuid = uuid;
    },
    // 点击gridItem，赋值uuid
    handlerGridItem(data, a, b, c) {
      this.currentIndex = {
        index: a,
        idx: b,
        id: c
      };
      this.currentItem = data;
      this.currentUuid = data.uuid;
    },
    // 点击formItem，赋值uuid
    handlerRenderItem(data, currentIndex) {
      this.currentIndex = currentIndex;
      this.currentItem = data;
      this.currentUuid = data.uuid;
    },
    // 删除formItem
    deleteForm(uuid) {
      let currentIndex = this.renderList.findIndex(item => {
        return item.uuid === uuid
      })
      this.renderList.splice(currentIndex, 1)
    },
    /**
     * @method deleteGrid 删除gridItem
     * @param {string} a 当前gridItem的uuid
     * @param {string} b 栅格当前的index
     * @param {string} c 栅格中a-col的index
     * @param {string} d a-col中当前gridItem的index
     *
     * */
    deleteGrid(a, b, c, d) {
      this.renderList[b].options.column[c].list.splice(d, 1)
    },
    // 复制formItem
    copyForm(uuid) {
      let currentIndex = this.renderList.findIndex(item => {
        return item.uuid === uuid
      });
      let currentItem = JSON.parse(JSON.stringify(this.renderList[currentIndex]));
      let newUuid = new Date().getTime();
      currentItem.uuid = newUuid;
      this.renderList.splice(currentIndex + 1, 0, currentItem)
    },
    // 改变字段属性
    currentItemChange(data) {
      if(typeof this.currentIndex === 'object') {
        let { index, idx, id } = this.currentIndex;
        this.renderList[index].options.column[idx].list.splice(id, 1, data)
      }else {
        this.renderList.splice(this.currentIndex, 1, data)
      }
    },
    // 清空表单
    clearForm() {
      this.renderList = [];
    },
    // 转成json
    toJson() {
      this.jsonData = {
        config: this.formOptions,
        list: this.renderList
      }
      this.visible = true;
    },
    // 关闭json模态框
    buttonAddCancel() {
      this.visible = false;
    },
    // 关闭json模态框
    previewPageCancel() {
      this.pageVisible = false;
    },
    // 打开预览
    previewPage() {
      this.jsonData = {
        config: this.formOptions,
        list: this.renderList
      }
      this.pageVisible = true;
    }
  }
}
</script>
<style lang="less" scoped>
.bb1 {
  border-bottom: 1px solid #eee;
  padding: 0 0 10px;
}
.mr10 {
  margin-right: 10px;
}
.ms10 {
  margin: 0px 10px;
}
.f10 {
  font-size: 16px;
}
.customer {
  min-height: 100vh;

  .formArea,
  .editArea,
  .propsArea {
    padding: 10px;
    border: 1px solid #eee;
    height: 90vh;
  }

  .formArea {
    .formItem {
      width: 48%;
      height: 40px;
      text-align: center;
      padding: 0;
      line-height: 40px;
      display: inline-block;
      box-sizing: border-box;
      border: 1px solid powderblue;
      margin: 0 2% 4px 0;
      background: powderblue;
    }

    .formItem:hover {
      border: 1px dashed #000;
    }
  }

  .editArea {
    overflow: auto;

    .form-render-group {
      width: 100%;
      min-height: 100px;
      display: inline-block;
    }

    .gridItem {
      padding: 10px 0;
      // min-height: 100px;

      .ant-col {
        min-height: 50px;
        border: 1px dashed #000;

        .grid-render-group {
          width: 100%;
          min-height: 50px;
          display: inline-block;

          .gridItem {
            width: 100%;
            min-height: 50px;
            border: 1px solid #eee;
            position: relative;
            // box-sizing: border-box;
          }
          .gridItem.current {
            border: 4px solid red;
          }
        }
      }
    }

    .renderItem {
      width: 100%;
      min-height: 50px;
      border: 1px solid #eee;
      position: relative;

      .prt {
        position: absolute;
        right: 0;
        bottom: 0;
        background: skyblue;
      }
    }

    .renderItem.current {
      border: 4px solid skyblue;
    }
  }
}
</style>