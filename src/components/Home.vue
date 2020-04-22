<template>
    <el-container>

        <!-- 头部区域 -->
        <el-header>
            <div>
                <span>SpringBoot-Shiro权限管理</span>
            </div>

            <div>
                <!-- 语言选择 -->
                <el-dropdown>
              <span class="el-dropdown-link">
                下拉菜单
              </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

                <el-button type="primary">登录</el-button>
            </div>
        </el-header>

        <!-- 主体区域 -->
        <el-main>
            Main
        </el-main>

        <!-- 尾部区域 -->
        <el-footer>
            Footer
        </el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    .el-header {
        background-color: rgba(49, 58, 71, 0.99);
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: aliceblue;
    }
</style>