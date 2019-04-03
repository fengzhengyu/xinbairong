<template>
  <div class="home">
    <Banner ></Banner>
    <div class="title">
      <h2>集团简介</h2>
      <i>introduction</i>
    </div>
    <p
      class="introduction-text"
    >中医药健康养生小镇是由北京鑫佰荣健康科技投资，河南鑫佰荣实业有限公司运营的中国首席智慧医药大健康产业综合体。项目规划用地1800亩，总规划面积230万平方米。按照特色小镇定位和发展方向，一期521亩两年内建设完成后，将引进一批百强药企，4000余家医药大健康企业入驻，预计解决就业2万人；二、三期1300亩建成后，陆续解决就业5万人。</p>
    <p
      class="introduction-text"
    >中医药健康养生小镇项目落户南阳，以买全球、卖全球，形成：一镇、两城、三基地、四条街、五批商、六统一的交易体、商品的七特色、八中心的全球医疗健康用品交易平台。</p>
    <p
      class="introduction-text"
    >中医药健康养生小镇”具有多种关联业态，他不是一个商业地产项目，而是一个医药大健康全产业链各要素协同联动、价值共生的资源整合，商企运营平台和产业聚集区。</p>
    <p
      class="introduction-text"
    >项目全部建成后，将形成一个全新的“新经济 +新零售+互联网+大医药+大健康+大养生+大食品+大资源 +大数据+大平台+大服务+大交易”的双核结合商业模式，并带动产业经济效益倍增，形成与医药商业资源聚集之优势完美结合的经济体。</p>
    <div class="intro-img">
      <img src="../common/img/intro-img.png" alt="">
    </div>

  
  </div>
</template>

<script type="text/ecmascript-6">

import Banner from '@/components/common/Banner.vue'

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
  /* font-size: 24px; */
  line-height: 230%;
  color: #353535;
}


.intro-img{
  width: 100%;
  height: 5.37rem;
  padding: .3rem 0;
}
.intro-img img{
    width: 100%;
    height: 100%;
    
  }
</style>
