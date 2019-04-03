<template>
  <div class="home">
    <Banner ></Banner>
    <div class="title">
      <h2>项目介绍</h2>
      <i>project</i>
    </div>
    <div style="overflow:hidden;">
      <div class="nav">
        <ul>
          <li :class="{'active':active == 1}" @click="active=1">
            <span>壹</span> 镇
          </li>
            <li :class="{'active':active == 2}" @click="active=2">
            <span>贰</span> 城
          </li>
            <li :class="{'active':active == 3}" @click="active=3">
            <span>叁</span> 基地
          </li>
            <li :class="{'active':active == 4}" @click="active=4">
            <span>肆</span> 条街
          </li>
            <li :class="{'active':active == 5}" @click="active=5">
            <span>伍</span> 批商
          </li>
            <li :class="{'active':active == 6}" @click="active=6">
            <span>陆</span> 统一
          </li>
            <li :class="{'active':active == 7}" @click="active=7">
            <span>柒</span> 特色
          </li>
            <li :class="{'active':active == 8}" @click="active=8">
            <span>捌</span> 中心
          </li>
           
        </ul>
      </div>
       <div class="content">
         <div class="list" v-show="active==1">
           <p>
             以产—学—研—销—养—旅游特色为一镇。按照特色小镇定位和发展方向，规划用地1800亩。
           </p>
           <div> 
             <img src="../common/img/project/1.jpg" alt="">
           </div>
         </div>

          <div class="list" v-show="active==2">
           <p>
             全球医疗健康用品交易城和河南国际医药健康城将形成一个全新的“新经济+新零售+互联网+大医药+大健康+大养生+大食品+大资源+大数据+大平台+大服务+大交易”的双核结合商业模式。
           </p>
           <div> 
             <img src="../common/img/project/2.jpg" alt="">
           </div>
         </div>
          <div class="list" v-show="active==3">
          
           <div> 
             <img src="../common/img/project/3.jpg" alt="">
           </div>
         </div>
          <div class="list" v-show="active==4">
           
           <div> 
             <img src="../common/img/project/4.jpg" alt="">
           </div>
         </div>
          <div class="list" v-show="active==5">
           <p>
          “五批共赢”入驻招商采购模式，“六位一体”销售开户统一战略模式，急速形成统采、统供、统销、统管、统配方式可衔接渠道、终端连锁及零售。改变产品品类单薄的采购格局。
           </p>
           <div> 
             <img src="../common/img/project/5.jpg" alt="">
           </div>
         </div>
          <div class="list" v-show="active==6">
           <p>
            “六位一体”营运模式，保证经营上的规模效应，同时可促使交易尽量做到现款现货、结算及时、售后服务快速响应，故只要有销售即可产生盈利。
           </p>
           <div> 
             <img src="../common/img/project/6.jpg" alt="">
           </div>
         </div>
          <div class="list" v-show="active==7">
         
           <div> 
             <img src="../common/img/project/7.jpg" alt="">
           </div>
         </div>
          <div class="list" v-show="active==8">
           <p>
             打造会议会展中心、跨境电商服务中心、康养方剂研发中心、健康养老服务中心、第三方病理检测中心、中医药商品交易中心康复中心（康复医院）、健康管理检测评估中心为八中心的现代医药大健康商业航母。
           </p>
           <div> 
             <img src="../common/img/project/8.jpg" alt="">
           </div>
         </div>
          

         
       </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">

import Banner from '@/components/common/Banner.vue'


export default {
  data() {
    return {
      active: 1
    };
  },
  created () {
    this.active = this.$route.query.id || 1;
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


.nav{
  width: 1.2rem;
  float: left;
}
.nav  li {
  padding: .15rem 0 .15rem .15rem;
  font-size: .18rem;
  color: #353535;
  font-weight: 700;
}
.nav  li.active span {
   background: #093013;
   color: #fff;
}

.nav  li span{
  display: inline-block;
  width: .45rem;
  height: 0.45rem;
  font-size: .24rem;
  text-align: center;
  line-height: .45rem;
  border-radius: 50%;
  background: #d6d6d6;


}
.content{
 margin: 0 .4rem;
  float: left;
  width: 5.5rem;


}
.list p{
  /* font-size: .18rem; */
  color: #353535;
 
  line-height: 230%;
}
.list div{
  padding: .2rem 0;
  text-align: center;
}
</style>
