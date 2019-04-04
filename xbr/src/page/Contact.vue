<template>
  <div class="home">
    <Banner ></Banner>
    <div class="title">
      <h2>联系方式</h2>
      <i>contact</i>
    </div>
    <div class="contact-img">
      <img src="../common/img/contact.png" alt="">
    </div>
    <p class="address">
      地址：河南省南阳市镇平县沪陕高速与207国道交叉口中医药健康养生小镇
    </p>
    <p class="address" style="padding-bottom: .4rem;">电话：0377-6582888</p>

  
  </div>
</template>

<script type="text/ecmascript-6">

import Banner from '@/components/common/Banner.vue';


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
.introduction-text {
  padding: 0 0.4rem;
  text-indent: 2em;
  font-size: 0.16rem;
  line-height: 230%;
  color: #353535;
}
.contact-img{
  width: 100%;
  height: 4.63rem;
  padding-bottom: .4rem;
}
.contact-img img{
    width: 100%;
    height: 100%;
    
  }
.address{
  /* font-size:12px; */
  color: #353535;
  padding-left: .85rem;
  line-height: 230%;
}

</style>
