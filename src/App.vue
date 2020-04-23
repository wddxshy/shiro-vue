<template>
  <div id="app">
    <router-view><home></home></router-view>
  </div>
</template>

<script>
  import Home from "@/components/Home";
  import Login from "@/components/Login";

  export default {
    name:'App',
    components:{
      Home,
      Login,
    }
  }
</script>

<style>
</style>
