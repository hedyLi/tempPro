<template>
  <div id="app">
    <Header></Header>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- <router-view/> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  created() {
    var path = this.$route.path;
    console.log(this.$route.path);
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.container {
  width: 1200px;
  /*height: 50px;*/
  margin: 0 auto;
  padding: 15px 0;
  overflow: hidden;
}
</style>
