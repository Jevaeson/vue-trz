<template>
  <button>按钮</button>
</template>

<script>
  // 使用 typescript 写 vue
  export default {
    name: "btn",
    props: ['txt'],
    mounted() {
      console.log(this.txt);
    },
  };
</script>


