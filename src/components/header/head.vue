<template>
    <header class="header">
        <div class="filtrate">
            <i class="iconfont iconiconfontzhizuobiaozhun023125"></i>
            <span class="filtrate_title">筛选</span>
        </div>

        <div class="title">
            <router-link to="" class="title_href active">书架</router-link>
            <router-link to="" class="title_href">关注</router-link>
        </div>

        <div class="function">
            <i class="iconfont iconsousuo"></i>
            <i class="iconfont icongengduo more"></i>
        </div>
    </header>
</template>
<script>
export default {
    name:'headtop'
}
</script>
<style scoped lang='scss'>
@import '@/assets/css/mixin.scss';

.header{
    @include flexJustify;

    background-color: $red;
    padding:29px 46px;

    i{
        color: #fff;
    }

    .filtrate{
        @include borderRadius(50px);

        border: 1px solid #fff;
        box-sizing: border-box;
        padding: 10px 25px;

        
        .filtrate_title{
            color: #fff;
            margin-left: 10px;
            vertical-align: top;
        }
    }

    .title{
        .title_href{
            @include fc(14px,#fff);

            padding:0 15px;
            color: #ffd7d4;
        }

        .active{
            @include fc(16px, #fff);
            position: relative;
        }

        .active:after{
            @include cl;
            content: '';
            bottom: -6PX;
            width: 40px;
            height: 2PX;
            background-color: #fff;
            border-bottom: 2px solid #fff;
        }
    }

    .function{
        .iconfont{
            font-size: 20px;
        }
        .more{
            margin-left: 50px;
        }
    }
}
</style>