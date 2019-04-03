<template>
  <div class="project">
    <ul>
      <li v-for="(item,index) in list" :key="index" class="item" @click="go(index)" >
        <h3 >{{ item.title }}</h3>
        <p v-html="item.info"></p>
      </li>
     
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list:[
        {
          title:"一镇",
          info: '以产学研销养旅游特色为一镇'
        },
        {
          title:"两城",
          info: '	全球医疗健康用品交易城 河南国际医药健康城'
        },
        {
          title:"三基地",
          info: '第三方医药仓储物流、中药材仓储<br>医药大健康OEM加工'
        },
        {
          title:"四条街",
          info: '名药名企、民俗文化特色旅游<br>名医名馆、中医药大健康产业文化'
        },
        {
          title:"五批商",
          info: '采购一批、代理一批、招商一批<br>推广配送一批、零售一批'
        },
        {
          title:"六统一",
          info: '采购一批、代理一批、招商一批<br>推广配送一批、零售一批'
        },
        {
          title:"七特色",
          info: '家用医疗器械、医美药妆、中药养生花茶、 个人护理、母婴...'
        },
        {
          title:"八中心",
          info: '会议会展、跨境电商服务、康养方剂研发健康养老服务...'
        }
      ]
    }
  },
  methods: {
    go(i){
      this.$router.push({
        name: 'project',
        query: {
          id: i+1
        }
      })
    }
  },
}
</script>
<style scoped>
.project ul{
  padding: 0 .4rem;
  overflow: hidden;


}
.project .item{
  float: left;
  width: 3.1rem;
  height: .8rem;
  margin: .2rem 0;
 

}
.project .item:nth-child(2n){
  margin-left: .5rem;
}
.project .item:nth-child(1){
  background: url('../../common/img/project1.png') no-repeat;
   background-size: 3.1rem .8rem;
}
.project .item:nth-child(2){
  background: url('../../common/img/project2.png') no-repeat;
   background-size: 3.1rem .8rem;
}
.project .item:nth-child(3){
  background: url('../../common/img/project3.png') no-repeat;
   background-size: 3.1rem .8rem;
}
.project .item:nth-child(4){
  background: url('../../common/img/project4.png') no-repeat;
   background-size: 3.1rem .8rem;
}
.project .item:nth-child(5){
  background: url('../../common/img/project5.png') no-repeat;
   background-size: 3.1rem .8rem;
}
.project .item:nth-child(6){
  background: url('../../common/img/project6.png') no-repeat;
   background-size: 3.1rem .8rem;
}
.project .item:nth-child(7){
  background: url('../../common/img/project7.png') no-repeat;
   background-size: 3.1rem .8rem;
}
.project .item:nth-child(8){
  background: url('../../common/img/project8.png') no-repeat;
   background-size: 3.1rem .8rem;
}

.item h3,.item p{
  padding-left: .8rem;
  color: #fff;
}
.item h3{
  font-size: .14rem;
  padding-top: .1rem;
  padding-bottom: .05rem;
}
.item p{
  font-size: .12rem;
  line-height: 150%;
  
}
</style>
