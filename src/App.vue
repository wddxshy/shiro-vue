<template>
  <div id="app">
    <router-view><home></home></router-view>
  </div>
</template>

<script>
  import Home from "@/components/Home";
  import Login from "@/components/Login";
  import Register from "@/components/Register";

  export default {
    name:'App',
    components:{
      Home,
      Login,
      Register
    }
  }
</script>

<style>
</style>
