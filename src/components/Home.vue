<template>
    <el-container>

        <!-- 头部区域 -->
        <el-header>
            <div class="head_icon">
                <img src="../assets/img/head.jpeg" @click="returnHome">
                <span id="title">SpringBoot-Shiro权限管理</span>
            </div>

            <div>
                <el-dropdown trigger="click" id="language">
              <span class="el-dropdown-link">简体中文</span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item @click="">简体中文</el-dropdown-item>
                        <el-dropdown-item @click="">English</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

                <el-button type="primary" @click="accountLogin">登录</el-button>
            </div>
        </el-header>

        <!-- 主体区域 -->
        <el-main>

            <!-- 走马灯 -->
            <el-carousel height="450px">
                <el-carousel-item v-for="item in back" :key="item">
                    <img :src="item">
                </el-carousel-item>
            </el-carousel>
        </el-main>

        <!-- 尾部区域 -->
        <el-footer>
            <el-divider/>
        </el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return{
                language:'sdsdsd',
                back:[require('../assets/carousel/1.jpg'),
                      require('../assets/carousel/2.jpg'),
                      require('../assets/carousel/3.jpg'),
                      require('../assets/carousel/4.jpg')]
            }
        },
        methods:{
            accountLogin(){
                this.$router.push('/login');
            },
            returnHome(){
                this.$router.push('/');
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
    #language{
        margin-right: 15px;
    }
    .el-dropdown-link{
        color: white;
    }
    .el-main{
        padding-left: 0;
        padding-right: 0;
    }
</style>