<template>
    <div id="app" @mousewheel="switchPage">
        <my-header></my-header>
        <div class="switchLanguage" @click="switchLanguage">
            <span id="chinese" ref="chinese" class="languageActive">{{chinese}}</span><span id="english" ref="english">{{english}}</span><span class="background" ref="background"></span>
        </div>
        <transition :name="show" @after-enter="afterEnter">
                <router-view/>
        </transition>
    </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
    name: 'App',
    data(){
            return {
                show: 'next',
                chinese: '中',
                english: '英',
                jump: [
                    'home', 'about', 'skills', 'experience', 'contact'
                ],
                isRunning: true
            }
    },
    mounted(){
        // console.log(this.$route.params.page);
        this.$router.replace('/');
        // console.log(this.$root.$data);
    },
    watch: {
        //路由改变时, 判断上下翻
        $route(){
            let page = this.$route.params.page,
                oldPage = this.$route.params.oldPage;
            this.show = (page>oldPage)?'next':'prev';
            // console.log(this.show);
        }
    },
    methods: {
        switchPage(e){
            if(this.isRunning){
                //  检测当前为第几页
                let page = this.$route.params.page || 1,
                    oldPage = this.$route.params.oldPage,
                    len = this.jump.length;
                //向下翻
                if(e.wheelDelta<0 && page<len){
                    // this.show = 'next';
                    this.isRunning = false;
                    this.$router.replace({
                        name: this.jump[page],
                        params: {
                            page: page+1,
                            oldPage: page
                        }
                    });
                }
                //向上翻
                else if(e.wheelDelta>0 && page>1){
                    // this.show = 'prev';
                    this.isRunning = false;
                    this.$router.replace({
                        name: this.jump[page-2],
                        params: {
                            page: page-1,
                            oldPage: page
                        }
                    });
                }
            }
        },
        afterEnter(){
            this.isRunning = true;
        },
        addClass(el,newClass){
            var oldClass = el.className;
            if(oldClass){
                el.className = `${oldClass} ${newClass}`;
            }else{
                el.className = newClass;
            }
        },
        switchLanguage(e){
            let target = e.target;
            switch(target.id){
                //切换到中文
                case 'chinese':
                    this.$common.addClass(target, 'languageActive');
                    this.$common.removeClass(this.$refs.english, 'languageActive');
                    this.$common.removeClass(this.$refs.background, 'toEnglish');
                    this.$common.addClass(this.$refs.background, 'toChinese');
                    this.$root.$data.language = 'chinese';
                    this.chinese = '中';
                    this.english = "英";
                    break;
                //切换到英文
                case 'english':
                    this.$common.addClass(target, 'languageActive');
                    this.$common.removeClass(this.$refs.chinese, 'languageActive');
                    this.$common.removeClass(this.$refs.background, 'toChinese');
                    this.$common.addClass(this.$refs.background, 'toEnglish');
                    this.$root.$data.language = 'english';
                    this.chinese = 'CN';
                    this.english = "EN";
                    break;
            }
        }
    },
    components: {
            'my-header': Header
    }
}
</script>

<style lang="scss" scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    .switchLanguage{
        position: fixed;
        z-index: 1;
        top: 60px;
        right: 20px;
        background-color: rgba(66, 66, 66, 0.3);
        border-radius: 16px;
        @mixin language{
            border: none;
            outline: none;
            border-radius: 50%;
            padding: 8px;
            display: inline-block;
            width: 32px;
            height: 32px;
            font-size: 14px;
            line-height: 16px;
            cursor: pointer;
            transition: all 1s;
            position: relative;
            z-index: 1;
        }
        #chinese{
            @include language;
        }
        #english{
            @include language;
        }
        .languageActive{
            color: #fff;
            cursor: text;
        }
        @keyframes toChinese{
            0%   {
                transform: translate3d(100%, 0, 0);
            }
            100% {
                transform: translate3d(0, 0, 0);
            }
        }
        @keyframes toEnglish{
            100% {
                transform: translate3d(100%, 0, 0);
            }
        }
        .toChinese{
            animation: toChinese 0.5s forwards;
        }
        .toEnglish{
            animation: toEnglish 0.5s forwards;
        }
    }
    .background{
        position: absolute;
        top: 0;
        left: 0;
        width: 32px;
        height: 100%;
        background-color: #666;
        border-radius: 50%;
    }
}

.next-enter-active, .next-leave-active{
    transition: all 1s;
}
.next-enter-to, .next-leave-to{
    transform: translate3d(0, -100%, 0);
}

.prev-enter-active, .prev-leave-active{
    transition: all 1s;
}
.prev-enter{
    transform: translate3d(0, -200%, 0);
}
.prev-enter-to{
    transform: translate3d(0, -100%, 0);
}
.prev-leave-to{
    transform: translate3d(0, 100% , 0);
}



/*.next-enter-active,.next-leave-active{
    transition:transform 0.5s ease; 
}
.next-enter-to,.next-leave-to{
    transform: translateY(-100%);
}

.prev-enter-active,.prev-leave-active{
    transition:transform 0.5s ease; 
}
.prev-leave-to{
    transform: translateY(100%);
}
.prev-enter{
    transform: translateY(-200%);
}
.prev-enter-to{
    transform: translateY(-100%);
}*/

</style>
