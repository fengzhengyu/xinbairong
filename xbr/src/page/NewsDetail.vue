<template>
  <div class="home">
    
    <Banner ></Banner>
    <div class="title">
      <h2>新闻动态</h2>
      <i>news</i>
    </div >
    <div class="head">
      <p>{{ title }}</p>
      <span class="user">{{ addUser }}</span>
      <span class="time">{{ addTime.substring(0,11) }}</span>
    </div>
    <div class="detail" v-html="detail">
      
    </div>

    
  </div>
</template>

<script type="text/ecmascript-6">

import Banner from '@/components/common/Banner.vue'
import { getNewsDetail } from 'common/api'

export default {
  data() {
    return {
      detail:{},
      addTime: '',
      addUser: '',
      title: ''
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList(){
       getNewsDetail({params:{
       aid: this.$route.query.id
       
      }} ).then((response)=>{
        let res = response.data;
        this.detail = res.data.content;
        this.addTime = res.data.addtime;
        this.addUser= res.data.typename;
         this.title= res.data.title;
        console.log(res)
      })
    }
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
.head{
  text-align: center;
  padding-bottom: .4rem;
}
.head p{
  font-size: 16px;
  font-weight: 700;
  padding-bottom: .2rem;
  line-height: 150%;
}
.head span{
  color: #898989;
  font-size: 10px;
}
/*
@media screen and ( -webkit-min-device-pixel-ratio : 2 ),       
    ( min--moz-device-pixel-ratio : 2 ),      
    ( min-resolution: 2dppx ) {
  .head p{
     font-size: 32px;
  }
  .head span{
     font-size: 20px;
  }
}
@media screen and ( -webkit-min-device-pixel-ratio : 3 ),       
    ( min--moz-device-pixel-ratio : 3 ),      
    ( min-resolution: 3dppx ) {
  .head p{
     font-size: 48px;
  }
  .head span{
    font-size: 30px;
  }
}
*/


.head .user{
  padding-right: .2rem;
}
.detail{
  padding: 0 .4rem;


}
.detail p{
  line-height: 200%;
  font-size: .18rem;
}

</style>
