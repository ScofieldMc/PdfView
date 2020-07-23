<template>
    <div>
        <el-container>
            <el-header height="100px">
                <div>
                    <div class="title">
                        <h3>
                            {{title}}
                        </h3>
                    </div>
                </div>
            </el-header>
            <el-main id="el-main">
                <Profile title="基础数据管理"></Profile>
                <Profile title="基础数据管理"></Profile>
                <Profile title="基础数据管理"></Profile>
                <Profile title="基础数据管理"></Profile>
                <Profile title="基础数据管理"></Profile>
                <Profile title="基础数据管理"></Profile>
                <Profile title="基础数据管理"></Profile>
            </el-main>
        </el-container>
    </div>
</template>
<script>
    import Profile from "../components/Profile";
    export default {
        name: 'App',
        methods: {
        },
        components: {
            Profile
        },
        data(){
            return {
                title: '标准化平台操作指南'
            }
        }
    }
</script>
<style>
    body{
        margin: 0px;
        padding: 0px;
    }
    .el-header{
        background-color: #409EFF;
        line-height: 50px;
        text-align: center;
        color: white;
    }
    #el-main{
        display: flex;
    }
    .el-main{
        flex-wrap: wrap;
        margin: 20px 120px;
    }

</style>
