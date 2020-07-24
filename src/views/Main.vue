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
                <Profile v-for="item in pdfs" :title="item.title" :pdf-url="item.url"/>
            </el-main>
        </el-container>
    </div>
</template>
<script>
    import Profile from "../components/Profile";
    import axios from 'axios'
    export default {
        name: 'App',
        methods: {
        },
        components: {
            Profile
        },
        data(){
            return {
                title: '标准化平台操作指南',
                pdfs: null
            }
        },
        created() {
            console.log("created");
            axios.get('data.json').then(response => {
                this.pdfs = response.data.pdfs;
            })
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
        justify-content: center;
    }
    .el-main{
        flex-wrap: wrap;
        margin: 20px 120px;
    }

</style>
