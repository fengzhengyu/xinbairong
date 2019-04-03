<template>
  <div class="home">
   
    <Banner ></Banner>
    <div class="title">
      <h2>门店展示</h2>
      <i>shop</i>
    </div>
    <div class="garden">
      <div class="img" v-for="(item,index) in imgList" :key="index"><img :src="item" v-preview="item" preview-title-enable="true"  preview-nav-enable="true"></div>
        
    </div>

  
  </div>
</template>

<script type="text/ecmascript-6">

import Banner from '@/components/common/Banner.vue';


export default {
  data() {
    return {
      imgList: [
      require('../common/img/shop/1.jpg'),
      require('../common/img/shop/2.jpg'),
      require('../common/img/shop/3.jpg'),
      require('../common/img/shop/4.jpg'),
      require('../common/img/shop/5.jpg'),
      require('../common/img/shop/6.jpg'),
      require('../common/img/shop/7.jpg'),
      require('../common/img/shop/8.jpg'),
      require('../common/img/shop/9.jpg'),
      require('../common/img/shop/10.jpg'),
      require('../common/img/shop/11.jpg'),
      require('../common/img/shop/12.jpg'),
      require('../common/img/shop/13.jpg'),
      require('../common/img/shop/14.jpg'),
      require('../common/img/shop/15.jpg'),
   
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
.garden .img img{
  width: 100%;
  height: 100%;
}
.garden .img:nth-child(2n){
  padding-right: 0;
}
</style>
