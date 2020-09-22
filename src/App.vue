<template>
  <div id="app">
    <a-config-provider :locale="locale">
      <div id="app">
        <router-view/>
      </div>
    </a-config-provider>
  </div>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import { AppDeviceEnquire } from '@/utils/mixin'
export default {
  mixins: [ AppDeviceEnquire ],
  data() {
    return {
      locale: zhCN
    }
  }
}
</script>
<style lang="less">

</style>
