<template>
  <div class="home">
    
    <Banner ></Banner>
    <div class="title">
      <h2>新闻动态</h2>
      <i>news</i>
    </div>
    <ul class="news-wrap">
      <li class="list">
        <div class="img">
          <img src="../common/img/news.jpg" alt="">
        </div>
        <div class="info">
          <h2>吉林梅河口市同参堂参业有限公司到我司前来洽谈</h2>
          <p>鑫百荣实业 <span>  2019-3-30 </span></p>
        </div>
      </li>
    </ul>

    
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
.list{
  padding-bottom: .4rem;
  overflow: hidden;

}
.list .img{
  width: 2rem;
  height: 1.4rem;
  padding: 0 .4rem;
  float: left;
}
.list .img img{
  width: 100%;
  height: 100%;

}
.list .info{
  float: left;
  width: 4.7rem;
  position: relative;
  height: 1.4rem;
   z-index: 0;
}
.info h2{
  font-size: 14px;
  color : #353535;
  line-height: 150%;
  max-height: 1rem;
 overflow:hidden;

text-overflow:ellipsis;

display:-webkit-box;

-webkit-box-orient:vertical;

-webkit-line-clamp:2;
}
.info p{
  position: absolute;
  left: 0;
  bottom: .1rem;
  font-size: 10px;
  color: #898989;

}
.info span{
  padding-left: .3rem;
}
.page{
margin-left: 2rem;
margin-bottom: .4rem;
}
</style>
