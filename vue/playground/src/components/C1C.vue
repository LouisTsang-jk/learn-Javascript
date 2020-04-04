<template>
  <div>
    <div style="color:red">
      <slot name="header"></slot>
    </div>
    <div style="color:blue">
      <slot name="main"></slot>
    </div>
    <div style="color:green">
      <slot name="footer" :text="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "C1C",
  props: {
    text: Object
  },
  created() {
    console.log("slot", this.$slots);
  },
  mounted() {

    // console.log('root', this.$root)
    // console.log('el', this.$el)
    // console.log('parent', this.$parent)
  }
};
</script>

