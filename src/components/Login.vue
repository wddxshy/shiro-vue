<template>
    <el-container>
        <el-header>Header</el-header>
        <el-main>
            <div class="login_main">
                <el-form :model="loginForm" class="form_box">
                    <el-form-item>
                        <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="loginForm.password" placeholder="密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <div class="captcha">
                            <el-input v-model="loginForm.captcha"></el-input>
                            <img src="../assets/img/head.jpeg">
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox v-model="loginForm.checked">记住账号</el-checkbox>
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
                loginForm:{
                    username:'',
                    password:'',
                    checked:false,
                    captcha:''
                },
            }
        },
        methods:{
            login(){
                console.log(this.loginForm)
            }
        }
    }
</script>

<style scoped>
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