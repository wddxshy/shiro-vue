<template>
    <el-container>
        <el-header>
            <div class="head_icon">
                <img src="../assets/img/head.jpeg" @click="returnHome">
                <span id="title">SpringBoot-Shiro权限管理</span>
            </div>
        </el-header>
        <el-main>
            <div class="login_main">
                <el-form :model="account" class="form_box">
                    <el-form-item prop="ausername">
                        <el-input v-model="account.ausername" placeholder="用户名"></el-input>
                    </el-form-item>
                    <el-form-item prop="apassword">
                        <el-input v-model="account.apassword" placeholder="密码"></el-input>
                    </el-form-item>
                    <el-form-item prop="captcha">
                        <div class="captcha">
                            <el-input v-model="account.captcha"></el-input>
                            <img src="../assets/img/head.jpeg">
                        </div>
                    </el-form-item>
                    <el-form-item prop="checked">
                        <el-checkbox v-model="account.checked">记住账号</el-checkbox>
                    </el-form-item>
                    <el-form-item class="login_btn">
                        <el-button type="primary" @click="login" style="width: 150px;font-size: medium">登录</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-divider/>
                        <i class="iconfont icon-qq1"></i>
                        <i class="iconfont icon-github"></i>
                        <i class="iconfont "></i>
                    </el-form-item>
                </el-form>
            </div>
        </el-main>
        <el-footer>Footer</el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                account:{
                    ausername:'zhangsan',
                    apassword:'123456',
                    checked:false,
                    captcha:'sss'
                },
            }
        },
        methods:{
            async login(){
                if (this.account.ausername==='') return this.$message.error('请输入账号')
                if (this.account.apassword==='') return this.$message.error('请输入密码')
                console.log(this.account)
                const {data:res} = await this.$http.post('/api/account/login',this.account)
                console.log(res)
                if (res.code===200) {
                    this.$message.success(res.message)
                    await this.$router.push("/user")
                }
                else this.$message.error(res.message)

            },
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
    .el-main{
        background-image: url("../assets/img/login_back.jpg");
        padding: 0;
        height: 600px;
    }
    .login_main{
        background-color: white;
        height: 450px;
        width: 350px;
        border-radius: 3px;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .form_box{
        width: 100%;
        padding: 30px 30px;
        box-sizing: border-box;  /* 去掉盒子右边溢出 */
    }
    .captcha{
        display: flex;
        justify-content: space-between;
    }
    .login_btn{
        margin-bottom: 0;
        display: flex;
        justify-content: space-around;
    }
    i{
        width: 120px;
        height: 120px;
    }
</style>