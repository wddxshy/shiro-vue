<template>
    <el-container>
        <el-header>
            <div class="head_icon">
                <img src="../assets/img/head.jpeg" @click="returnHome">
                <span id="title">SpringBoot-Shiro权限管理</span>
            </div>
        </el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "Account",
        data(){
            return{

            }
        },
        methods:{
            returnHome(){
                this.$router.push("/")
            }
        }
    }
</script>

<style scoped>
    .el-header {
        background-color: rgba(49, 58, 71, 0.99);
        display: flex;
        justify-content: space-between;  /* 设置头部区域组件分居两侧 */
        padding-left: 0;  /* 设置 ’head_icon‘ div左边距 */
        align-items: center;
        color: #fff;   /* 设置字体颜色 */
    }
    .head_icon{
        display: flex;
        align-items: center;
    }
    #title{
        margin-left: 15px;  /* 设置标题和icon的间距 */
    }
</style>