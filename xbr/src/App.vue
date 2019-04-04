<template>
  <div id="app">
    <Header></Header>
    <keep-alive>
        <router-view class="view"
                  transition
                  transition-mode="out-in"
                   v-if="$route.meta.keepAlive"
                   
                  >
        </router-view>
    </keep-alive>
    <router-view class="view"
                  transition
                  transition-mode="out-in"
                   v-if="!$route.meta.keepAlive"
                  >
    </router-view>
    <lg-preview></lg-preview>
    <Footer></Footer>
  </div>
</template>


<script>
import Header from "@/components/common/Header.vue";
import project from "@/components/Index/Project.vue";
import Footer from "@/components/common/Footer.vue";
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
<style scoped>
  .view{
    padding: 1rem 0 .8rem 0;
  }
</style>

