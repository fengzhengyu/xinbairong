<template>
  <div class="home">
    
    <Banner ></Banner>
    <div class="title">
      <h2>新闻动态</h2>
      <i>news</i>
    </div >
    <div class="detail">
      详情
    </div>

    
  </div>
</template>

<script type="text/ecmascript-6">

import Banner from '@/components/common/Banner.vue'
import Page from '@/components/common/Page.vue'

export default {
  data() {
    return {
      changeIndex: 0
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
.detail{
  padding: 0 .4rem;


}

</style>
