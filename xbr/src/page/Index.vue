<template>
  <div class="home">
    <Header></Header>
    <div class="banner">
      <img src="../common/img/banner.jpg" alt>
    </div>
    <div class="title">
      <h2>集团简介</h2>
      <i>introduction</i>
    </div>
    <p class="introduction-text">
      河南中医药健康养生小镇是由北京鑫佰荣健康科技投资，河南鑫佰荣实业有限公司运营的中国首席智慧医药大健康产业综合体。项目规划用地1800亩，总规划面积230万平方米。按照特色小镇定位和发展方向，一期521亩两年内建设完成后，将引进一批百强药企，4000余家医药大健康企业入驻，解决就业2万人；二、三期1300亩建成后，陆续解决就业5万人。
      <router-link to="/intro">[详情]</router-link>
     
    </p>
    <div class="title">
      <h2>项目简介</h2>
      <i>project</i>
    </div>
    <v-project></v-project>
    <div class="title">
      <h2>我们的优势</h2>
      <i>advantage</i>
    </div>
    <div class="advantage">
      <img src="../common/img/advantage.png" alt>
    </div>
    <div class="advantage-text">
      全球医疗健康用品交易城和河南国际医药健康城将形成一个全新的
      新经济+新零售+互联网+大医药+大健康+大养生+大食品+大资源+大数据+大平台+大服务
      +大交易的双核结合商业模式
    </div>
    <Footer></Footer>
  </div>
</template>

<script type="text/ecmascript-6">

import project from "@/components/Index/Project.vue";


export default {
  data() {
    return {
      changeIndex: 0
    };
  },
  components: {
 
    "v-project": project,

  }
};
</script>

<style scoped >
.banner {
  width: 100%;
  height: 5.29rem;
}
.banner img{
    width: 100%;
    height: 100%;
    
  }

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
  /* font-size: .18rem; */
  line-height: 230%;
  color: #353535;
}

.introduction-text a {
  color: #0066ff;
}
.advantage{
  width: 100%;
  height: 3.55rem;
}
.advantage img{
    width: 100%;
    height: 100%;
    
  }
.advantage-text{
  /* text-align: center; */
   /* font-size: .18rem; */
   text-indent: 2em;
  line-height: 230%;
  color: #353535;
  padding: .5rem 0 .5rem 0 ;
}
</style>
