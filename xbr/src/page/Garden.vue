<template>
  <div class="home">

    <Banner ></Banner>
    <div class="title">
      <h2>园区展示</h2>
      <i>garden</i>
    </div>
    <div class="garden">


      <div class="img" v-for="(item,index) in imgList" :key="index" ><img :src="item" v-preview="item" preview-title-enable="true"  preview-nav-enable="true"></div>
        
    </div>

  
  </div>
</template>

<script type="text/ecmascript-6">

import Banner from '@/components/common/Banner.vue';


export default {
  data() {
    return {
      imgList: [
      require('../common/img/garden/1.jpg'),
      require('../common/img/garden/2.jpg'),
      require('../common/img/garden/3.jpg'),
      require('../common/img/garden/4.jpg'),
      require('../common/img/garden/5.jpg'),
      require('../common/img/garden/6.jpg'),
      require('../common/img/garden/7.jpg'),
      require('../common/img/garden/8.jpg'),
      require('../common/img/garden/9.jpg'),
      require('../common/img/garden/10.jpg'),
      require('../common/img/garden/11.jpg'),
      require('../common/img/garden/12.jpg'),
      require('../common/img/garden/13.jpg'),
      require('../common/img/garden/14.jpg'),
      require('../common/img/garden/15.jpg'),
      require('../common/img/garden/16.jpg'),
      require('../common/img/garden/17.jpg'),
      ]
    };
  },
  components: {
  
    Banner
  }
};
</script>

<style scoped >
.title {
  padding: 0.4rem 0;
  height: 0.7rem;
  background: url("../common/img/line.png") no-repeat center;
  background-size: 7.5rem;
  text-align: center;
  color: #0d2e16;
}
.title h2 {
  font-size: 0.36rem;
  font-weight: 600;
}
.title i {
  display: block;
  padding-top: 0.1rem;
  font-size: 0.14rem;
  font-weight: 700;
  text-transform: uppercase;
}
.garden {
  overflow: hidden;
}
.garden .img{
  width: 3.55rem;
  height: 2.68rem;
  padding: 0 .4rem .4rem 0;
  float: left;
}
.garden .img:nth-child(2n){
  padding-right: 0;
}
</style>
