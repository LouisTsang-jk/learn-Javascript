<template>
  <div class="hello" @click="$emit('play')">
    <h1>{{ text }}</h1>
    <C1C></C1C>
  </div>
</template>

<script>
import C1C from "./C1C.vue";
export default {
  name: "C1",
  customOptions: "自定义参数",
  components: {
    C1C
  },
  props: {
    text: {
      type: String,
      default: "C1"
    }
  },
  created() {
    console.log("data", this.$data);
    console.log("props", this.$props);
    console.log("options", this.$options.customOptions);
    console.log("parent", this.$parent);
    console.log("root", this.$root);
  },
  mounted() {
    console.log("el", this.$el);
  }
};
</script>

