<template>
  <div class="home">
    
    <Banner ></Banner>
    <div class="title">
      <h2>新闻动态</h2>
      <i>news</i>
    </div >
    <div class="head" v-if="isLoad">
      <p>{{ title }}</p>
      <span class="user">{{ addUser }}</span>
      <span class="time">{{ addTime.substring(0,11) }}</span>
    </div>
    <div class="detail" v-html="detail"  v-if="isLoad">
      
    </div>

     <div v-if="!isLoad" class="load">
      加载中...
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
      title: '',
      isLoad: false
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
      // console.log(res)
        if(res.flag == 'success'){
          this.detail = res.data.content;
          this.addTime = res.data.addtime;
          this.addUser= res.data.typename;
          this.title= res.data.title;
          this.isLoad = true;
        }
        
  
      })
    }
  },
  components: {
    Banner 
  
 
  }   ,
  beforeRouteLeave(to,from,next){
    if(to.name== 'news'){
      to.meta.isUseCache = true;
      // console.log(to)
    }
    next()
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

[data-dpr="2"]  .head p{
     font-size: 32px;
  }
  [data-dpr="2"]  .head span{
     font-size: 20px;
  }

[data-dpr="3"]  .head p{
     font-size: 48px;
  }
  [data-dpr="3"]  .head span{
     font-size: 30px;
  }



.head .user{
  padding-right: .2rem;
}
.detail{
  padding: 0 .4rem;


}

.load{
  text-align: center;
  padding-top: 1rem;
   color : #353535;
}
</style>
