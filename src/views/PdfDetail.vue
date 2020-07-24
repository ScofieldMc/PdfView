<template>
    <div>
        <el-container>
            <el-header>
                <span class="menu">
                    <span @click="toHome" class="back"><i class="el-icon-s-home icon"></i><span>操作指南</span></span>
                    <i class="el-icon-arrow-right" ></i>
                    <span>{{title}}</span>
                </span>

                <div class="pdf-tab">
                    <!--                    <div class="back" @click="toHome"><i class="el-icon-s-home icon"></i></div>-->
                    <div class="btn-def btn-pre back"
                         title="上一页"
                            @click.stop="prePage"><i class="el-icon-arrow-left icon"></i></div>
                    <div>{{pageNum}}/{{pageTotalNum}}</div>
                    <div
                            title="下一页"
                            class="btn-def btn-next back"
                            @click.stop="nextPage"><i class="el-icon-arrow-right icon"></i></div>
                    <div
                            title="顺时针旋转"
                            class="btn-def back"
                            @click.stop="clock"><i class="el-icon-refresh-right icon"></i></div>
                    <div
                            title="逆时针旋转"
                            class="btn-def back"
                            @click.stop="counterClock"><i class="el-icon-refresh-left icon"></i></div>
                    <div class="el-icon-zoom-in icon back" :class="{select:idx==0}"
                         title="放大"
                            @touchstart="idx=0"
                            @touchend="idx=-1"
                            @click="scaleD">

                    </div>
                    <div class="el-icon-zoom-out icon back" :class="{select:idx==1}"
                         title="缩小"
                            @touchstart="idx=1"
                            @touchend="idx=-1"
                            @click="scaleX">

                    </div>
                    <div
                            title="打印"
                            class="btn-def back"
                            @click.stop="pdfPrintAll"><i class="el-icon-printer icon"></i></div>

                </div>
                <span class="menu">
                    <i
                            title="返回"
                            class="el-icon-back back icon"
                            @click="comeBack"></i>
                </span>
            </el-header>
            <el-main id="el-main">

                <div>
                    <pdf
                            ref="pdf"
                            :src="pdfUrl"
                            :page="pageNum"
                            :rotate="pageRotate"
                            @progress="loadedRatio = $event"
                            @page-loaded="pageLoaded($event)"
                            @num-pages="pageTotalNum=$event"
                            @error="pdfError($event)"
                            @link-clicked="page = $event">
                    </pdf>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import pdf from 'vue-pdf'
    export default {
        name: "PdfDetail",
        data(){
            return {
                title: '',
                pdfUrl: '',
                pageNum:1,
                pageTotalNum:1,
                pageRotate:0,
                // 加载进度
                loadedRatio:0,
                curPageNum:0,
                scale: 100,
                idx: -1
            }
        },
        components: {
            pdf
        },
        mounted() {
            this.title = this.$route.query.title;
            this.pdfUrl = this.$route.query.pdfUrl;
        },
        methods: {
            toHome(){
                this.$router.push('/')
            },
            prePage(){
                let p = this.pageNum
                p = p>1?p-1:1
                this.pageNum = p
                window.scrollTo(0,0)
            },
            nextPage(){
                let p = this.pageNum
                p = p<this.pageTotalNum?p+1:this.pageTotalNum
                this.pageNum = p
                window.scrollTo(0,0)
            },
            clock(){
                this.pageRotate += 90
            },
            counterClock(){
                this.pageRotate -= 90
            },

            pageLoaded(e){
                this.curPageNum = e
            },
            pdfError(error){
                console.error(error)
            },
            pdfPrintAll(){
                this.$refs.pdf.print()
            },
            scaleD(){
                this.scale += 5;
                this.$refs.pdf.$el.style.width = parseInt(this.scale)+'%';
            },
            scaleX(){
                if (this.scale == 100) {
                    return;
                }
                this.scale += -5;
                this.$refs.pdf.$el.style.width = parseInt(this.scale) + "%";
            },
            comeBack(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
    .el-header{
        display: flex;
        line-height: 60px;
        position: sticky;
        top: 0px;
        z-index: 99;
        justify-content: space-between;
    }
    .el-main{
        display: flex;
        flex-direction: column;
        margin-top: 0px;
        padding-top: 0px;
    }
    .back:hover{
        cursor: pointer;
    }
    .pdf-tab{
        height: 60px;
        display: flex;
        width: 50%;


    }
    .pdf-tab>div{
        height: 60px;
        line-height: 60px;
        flex: 1;
    }
    .icon{
        font-size: 24px;
    }
</style>