<template>
  <div>
    <tableRender :GeneratInfo="GeneratInfo"></tableRender>
  </div>
</template>

<script>
import tableRender from '@/components/tableRender';
import GeneratInfo from './home/data';
export default {
  components: { tableRender },
  data() {
    return {
      GeneratInfo
    }
  }
}
</script>

<style>

</style>script