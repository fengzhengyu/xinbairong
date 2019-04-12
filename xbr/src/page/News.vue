<template>
  <div class="home">
    
    <Banner ></Banner>
    <div class="title">
      <h2>新闻动态</h2>
      <i>news</i>
    </div>
   
    <ul class="news-wrap">
      <li class="list" v-for="(item,index) in  newsList" :key="index" @click="goDetail(item)">
        <div class="img">
          <img :src="item.photo?item.photo: require('../common/img/news.jpg')" alt="">
        </div>
        <div class="info">
          <h2>{{ item.title }}</h2>
          <p>{{ item.typename }}<span>{{ item.addtime.substring(0,11) }}</span></p>
        </div>
      </li>
     
    </ul>
    <div class="page" v-if="newsList.length>0">
      <span @click="goPage" v-if="!isEnd && !isLoad ">下一页</span>
      <i v-if="isEnd && !isLoad">~到底了~</i>
  
    </div>
    <div v-if="isLoad" class="load">
      加载中...
    </div>
    <div v-if="!isLoad && newsList.length<=0" class="load">
      暂无数据
    </div>

    
  </div>
</template>

<script type="text/ecmascript-6">
import { getNewsList } from 'common/api'
import Banner from '@/components/common/Banner.vue'
import Page from '@/components/common/Page.vue'

export default {
  data() {
    return {
      newsList: [],
      isLoad: true,
      page: 1,
      isEnd : false, // 分页到底了

     
    };
  },
  activated() {
//  isUseCache为false时才重新刷新获取数据
//  因为对list使用keep-alive来缓存组件，所以默认是会使用缓存数据的   
 if(!this.$route.meta.isUseCache){   
  this.newsList = []; // 清空原有数据
  this.getList(); // 这是我们获取数据的函数
  this.$route.meta.isUseCache = false;
 } 
},
  created() {

  },
  methods: {
    getList(){
      getNewsList({params:{
        page:this.page,
        // num: 3
       
      }} ).then((response)=>{
        let res = response.data;
        // console.log(res)
        if(res.flag == 'success'){
          if(res.data.length>0 &&res.listflag =="已到底部"){
            this.newsList = res.data;
             this.isEnd = true;
            this.isLoad = false;
          }else{
            // 暂无数据
            this.isLoad = false;
            this.newsList = res.data;
          }
          
        }
        
      }).catch((error)=>{console.log('接口或网络错误！')})
    },
    goDetail(item){
      this.$router.push({
        name:'detail',
        query: {
          id: item.aid
        }
      })
    },
    goPage(){
      if(!this.isLoad ){
        this.page++;
        getNewsList({params:{
          page:this.page
        }} ).then((response)=>{
          let res = response.data;
          this.newsList = this.newsList.concat(res.data)
          if( res.listflag=="已到底部"){
            this.isEnd = true;
          }
        })
      }
      
    }

  },
  components: {
    Banner 
  
 
  },

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
  font-size: .24rem;
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
  font-size: .18rem;
  color: #898989;

}
.info span{
  padding-left: .3rem;
}
.page{
    text-align: center;
    font-size: .16rem;
    padding: .4rem 0;
}
.page span{
  padding: .1rem .15rem;
  background: #0d2e16;
  color: #fff;
  border-radius: .05rem;
}
.load{
  text-align: center;
  padding-top: 1rem;
   color : #353535;
}
</style>
