<template>
  <div class="header">  
    <div class="nav-btn" @click="dropDown"></div>
    

      <ul class="dropdow" v-show="isShow">
        <li v-for="(item,index) in navList" :key="index" @click="goLink(item)"> {{ item.name }}</li>
       
      </ul>
      <div class="modal" v-show="isShow" @click="close"></div>
    </div>
</template>
<script>
export default {
  data(){
    return {
      isShow: false,
      navList:[
        {
          name: '集团首页',
          route: 'index'
        },
        {
          name: '集团介绍	',
          route: 'intro'
        },
         {
          name: '项目介绍',
          route: 'project'
        },
        {
          name: '新闻动态',
          route: 'news'
        },
       
        {
          name: '园区展示',
          route: 'garden'
        },
        {
          name: '门店展示',
          route: 'shop'
        },
        {
          name: '联系方式',
          route: 'contact'
        }
      ]
    }
  },
  methods: {
    dropDown(){
      this.isShow = !this.isShow;
    },
    close(){
      this.isShow = false;
    },
    goLink(item){
     if(this.$route.name == item.route ){
     this.$router.go(0)
      }
      this.$router.push({
        name: item.route
      });
       this.isShow = false;
    }
  },
}
</script>
<style scoped>
.header{
  width: 7.5rem;
  position: fixed;
  top: 0;
  height: 1rem;
  background: url('../../common/img/logo-bg.png') no-repeat;
  background-size: 4.88rem .99rem;
 background-color: #fff;
    z-index: 90;
}
.nav-btn{
  
    position: absolute  ;
    right: .45rem;
    top: .25rem;
    width: .76rem;
    height: .49rem;
    background: url('../../common/img/nav-btn.png') no-repeat;
    background-size: .76rem .49rem;

}
.modal{
   
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 95;
    background: rgba(0,0,0,0.2);
}
.dropdow{
 
  position: absolute;
  top: 1rem;
  right: 0;
  min-width: 2rem;
  background:  #fff;
  z-index: 99;
  border: 1px solid #ddd;
}
.dropdow:before {
    position: absolute;
    display: block;
    content: "";
    width: 0;
    height: 0;
    border-left: 0.1rem solid transparent;
    border-right: 0.1rem solid transparent;
    border-bottom: 0.2rem solid  #fff;
  
    z-index: 1;
    right: .7rem;
    top: -0.2rem;
    pointer-events: none;
}
.dropdow li{
  height: .6rem;
  color: #343434;
  line-height: .6rem;
  font-weight: 400;
  padding-left: .25rem;
  font-size: .2rem;




}

</style>

