<template>
  <div @mouseenter="stop" @mouseleave="start" class="show">
    <img src="https://m.360buyimg.com/babel/jfs/t1/21850/18/4042/85481/5c2ddfc0Ebc50c944/eca3c764711b848e.jpg" alt="" :class="`${ind === 0 && 'active'}`">
    <img src="https://img1.360buyimg.com/da/jfs/t1/28561/38/4053/101028/5c2d71d2E85abd8e9/4b61b793d3342f0d.jpg" alt="" :class="`${ind === 1 && 'active'}`">
    <img src="https://m.360buyimg.com/babel/jfs/t1/15038/32/3385/99792/5c262d2eE124d988d/cfe9902f28e506c5.jpg" alt="" :class="`${ind === 2 && 'active'}`">
    <img src="https://m.360buyimg.com/babel/jfs/t1/18238/34/4117/101782/5c2f3157Eb78085d6/5816a9740e799b05.jpg" alt="" :class="`${ind === 3 && 'active'}`">
    <ul class="list">
      <li @click="change(0)" :style="{ backgroundColor: ind === 0 ? 'red' : '#fff' }"></li>
      <li @click="change(1)" :style="{ backgroundColor: ind === 1 ? 'red' : '#fff' }"></li>
      <li @click="change(2)" :style="{ backgroundColor: ind === 2 ? 'red' : '#fff' }"></li>
      <li @click="change(3)" :style="{ backgroundColor: ind === 3 ? 'red' : '#fff' }"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "pic",
    data: () => ({
      ind: 0
    }),
    methods: {
      change(ind) {
        this.ind = ind
      },
      autoPlay() {
        if (this.ind === 3) {
          this.ind = 0
        } else {
          this.ind++
        }
      },
      stop() {
        clearInterval(this.run)
      },
      start() {
        this.run = setInterval(() => {
          this.autoPlay()
        }, 1500)
      }
    },
    mounted() {
      this.run = setInterval(this.autoPlay, 1500)
    }
  };
</script>

<style>
  .show {
    width: 590px;
    height: 470px;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
  }
  
  .show img {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 0.5s;
  }
  
  .show .list {
    list-style: none;
    position: absolute;
    display: flex;
    padding: 0;
    margin: 0;
    bottom: 20px;
    z-index: 2;
  }
  
  .show .list li {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #fff;
    margin-right: 5px;
  }
  
  .show .list li:last-child {
    margin-right: 0;
  }
  
  .show .active {
    opacity: 1;
    z-index: 1;
  }
</style>