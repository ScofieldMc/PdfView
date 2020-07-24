<template>
    <div class="ProfileView">
        <div class="title">
            <span>{{title}}</span>
        </div>
        <div class="content">
            <pdf :src="pdfUrl"></pdf>
        </div>
        <div class="footer">
            <el-button @click="toDetail" size="small">查看文档</el-button>
        </div>
    </div>
</template>

<script>
    import pdf from 'vue-pdf'
    export default {
        name: "Profile",
        data(){
            return {

            }
        },
        props: {
            title: String,
            pdfUrl: String,
        },
        methods: {
            toDetail(){
                this.$router.push({
                    path: '/detail',
                    query: {
                        title: this.title,
                        pdfUrl: this.pdfUrl
                    }
                })
            }
        },
        components: {
            pdf
        }

    }
</script>

<style scoped>
    .ProfileView{
        width: 170px;
        height: 220px;
        font-size: 16px;
        border: darkgray solid 1px;
        margin: 20px 20px;
    }
    .title {
        height: 40px;
        line-height: 40px;
        width: 170px;
        color: dodgerblue;
        border-bottom: 1px solid darkgray;
    }
    .title span{
        padding-left: 15px;
        overflow: no-display;
    }
    .footer {
        height: 40px;
        width: 170px;
        text-align: center;
    }
    .content{
        height: 140px;
        width: 169px;
        overflow: hidden;
        margin-bottom: 10px;

    }
    .ProfileView:hover{
        box-shadow: 0px 0px 10px #409EFF;
        border: 1px solid #409EFF;
        transition: 1s;

    }
    .el-button--small{
        width: 140px;
        height: 25px;
    }
</style>