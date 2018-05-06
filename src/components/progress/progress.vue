<template>
    <div class="progress">
      <div class="bi">{{value}}%</div>
      <progress max="100" :value="value"></progress>
      <div v-if="tips">{{tips}}</div>
    </div>
</template>

<script>
export default {
  name: 'Progress',
  props: {
    tips: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 0
    }
  },
}
</script>

<style lang="scss" scope>
.progress{
  text-align:center;
  .bi{
    font-size: 14px;
  }
}
</style>

