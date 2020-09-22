<template>
    <div>
        <a-modal
        :title="title"
        :visible="visible"
        @ok="handleOk"
        @cancel="handleCancel"
        >
        <p>是否要完善个人信息</p>
        </a-modal>
    </div>
</template>

<script>
export default {
  props: ['completeModels', 'title'],
  data() {
    return {
      visible: false,
    };
  },
  watch:{
      completeModels(a) {
          this.visible = a;
      }
  },
  methods:{
    handleOk(e) {
      setTimeout(() => {
        this.visible = false;
        this.$router.push('/userActivation');
      }, 1000);
    },
    handleCancel(e) {
      this.$router.push('/home');
      this.visible = false;
    },
  }
}
</script>

<style>

</style>