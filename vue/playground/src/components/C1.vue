<template>
  <div class="hello" :param2="text1" @click="$emit('play')">
    <!-- <h1>{{ text }}</h1> -->
    <C1C :param1="text1" @event1="event1">
      <template v-slot:header>header</template>
      <template v-slot:main>main</template>
      <template v-slot:footer="text1">footer+{{text1.params1}}</template>
    </C1C>
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
  data() {
    return {
      text1: {
        params1: "仅仅是文字"
      }
    };
  },
  props: {
    text: {
      type: String,
      default: "C1"
    }
  },
  created() {
    // console.log("data", this.$data);
    // console.log("props", this.$props);
    // console.log("options", this.$options.customOptions);
    // console.log("parent", this.$parent);
    // console.log("root", this.$root);
  },
  mounted() {
    // console.log("el", this.$el);
    console.log("children", this.$children);
  },
  methods: {
    event1() {
      console.log("event1");
    }
  }
};
</script>

